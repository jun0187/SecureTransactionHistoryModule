import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { NAVIGATION, TRX_TYPE } from "../constant";
import { getTrxHistoryListAction } from "../saga/TrxHistory.saga";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { setTrxHistoryDetail } from "../reducer/TrxHistory.reducer";
import { authenticateBiometric } from "../services/Biometric.service";
import StackContainer from "../component/StackContainer";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { setIsLogin } from "../reducer/Login.reducer";
import { Colors } from "react-native/Libraries/NewAppScreen";
import CustomFlatList from "../component/CustomFlatList";

const Home = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const dispatch = useDispatch();
  const [isMaskedAmount, setIsMaskedAmount] = useState(true);
  const trxHistoryList = useSelector(
    (state: any) => state.trxHistory.trxHistoryList
  );

  const testId = {
    title: "test-input-title",
    sortButton: "test-sort-button",
    trxHistoryDetail: "test-trxHistory-detail",
    flatList: "test-flat-list",
  };

  useEffect(() => {
    updateList(1);
  }, []);

  const updateList = (pageNo: number) => {
    dispatch(
      getTrxHistoryListAction({
        page: pageNo,
      })
    );
  };

  const onPressMaskedAmountIcon = async () => {
    if (!isMaskedAmount) {
      /* When is Visible, can masked amount directly without authentication */
      setIsMaskedAmount(!isMaskedAmount);
    } else {
      /* When is Masked, need authentication to reveal the amount */
      const isAuth = await authenticateBiometric();
      if (isAuth) setIsMaskedAmount(!isMaskedAmount);
    }
  };

  const onPressFlatListItem = (item: any) => {
    dispatch(setTrxHistoryDetail(item));
    navigation.navigate(NAVIGATION.DETAIL);
  };

  const amountDisplay = (item: any) => {
    const prefix = item.type === TRX_TYPE.CREDIT ? "-" : "+";
    const amount = isMaskedAmount ? "*****" : item.amount.toFixed(2);
    const displayAmount = `${prefix} MYR ${amount}`;

    return (
      <Text style={{ color: item.type === TRX_TYPE.CREDIT ? "red" : "green" }}>
        {displayAmount}
      </Text>
    );
  };

  return (
    <StackContainer>
      <View style={styles.topContainer}>
        <Text
          style={{ fontWeight: "bold", fontSize: 16 }}
          testID={testId.title}
        >
          Secure Transaction History
        </Text>
        <TouchableOpacity
          onPress={onPressMaskedAmountIcon}
          style={{ marginLeft: "7%" }}
        >
          <EntypoIcon
            name={isMaskedAmount ? "eye-with-line" : "eye"}
            size={20}
            color="#664229"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => dispatch(setIsLogin(false))}
          style={{ marginLeft: "7%" }}
          testID="test-logout-button"
        >
          <MaterialCommunityIcons name={"logout"} size={20} color="#664229" />
        </TouchableOpacity>
      </View>

      <CustomFlatList
        data={trxHistoryList}
        updateList={updateList}
        onPressItem={onPressFlatListItem}
        rightItem={amountDisplay}
      />
    </StackContainer>
  );
};
const styles = StyleSheet.create({
  topContainer: {
    justifyContent: "space-between",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: "7%",
    paddingVertical: "3%",
    margin: "1%",
    flexDirection: "row",
    backgroundColor: Colors.light,
  },
});
export default Home;
