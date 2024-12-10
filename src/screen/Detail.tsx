import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import React from "react";
import { NAVIGATION, TRX_TYPE } from "../constant";
import { StyleProp } from "react-native";
import StackContainer from "../component/StackContainer";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootState } from "../reducer/index.reducer";

const Detail = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  const trxHistoryDetail = useSelector(
    (state: RootState) => state.trxHistory.trxHistoryDetail
  );

  const testID = {
    container: "test-detail-container",
  };

  const amountStyle = (): StyleProp<TextStyle> => {
    let color = "black";
    if (trxHistoryDetail?.type === TRX_TYPE.DEBIT) {
      color = "red";
    } else if (trxHistoryDetail?.type === TRX_TYPE.CREDIT) {
      color = "green";
    }
    return { color: color, fontSize: 19 };
  };

  return (
    <StackContainer title="Transaction Detail" style={styles.container}>
      <View testID={testID.container} key={trxHistoryDetail?.id}>
        <View style={styles.innerContainer}>
          <Text style={styles.typeStyle}>
            {trxHistoryDetail?.type.toUpperCase()}
          </Text>
          <Text style={amountStyle()}>
            {trxHistoryDetail?.type === TRX_TYPE.DEBIT ? "-" : ""} MYR{" "}
            {trxHistoryDetail?.amount.toFixed(2)}
          </Text>
        </View>
        <View style={styles.horizontalLine} />
        <View style={styles.innerContainer}>
          <Text style={styles.defaultFontSize}>Description</Text>
          <Text style={styles.defaultFontSize}>
            {trxHistoryDetail?.description}
          </Text>
        </View>
        <View style={styles.innerContainer}>
          <Text style={styles.defaultFontSize}>Date</Text>
          <Text style={styles.defaultFontSize}>{trxHistoryDetail?.date}</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate(NAVIGATION.HOME)}
          style={styles.backButton}
          testID="test-logout-button"
        >
          <Text>Back</Text>
        </TouchableOpacity>
      </View>
    </StackContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: "10%",
    marginVertical: "10%",
  },
  innerContainer: {
    marginTop: "8%",
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",
    width: "90%",
  },
  typeStyle: {
    fontWeight: "bold",
    fontSize: 17,
  },
  horizontalLine: {
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignSelf: "stretch",
    width: "100%",
    marginTop: "3%",
    marginBottom: "10%",
  },
  defaultFontSize: {
    fontSize: 15,
  },
  backButton: {
    borderRadius: 10,
    backgroundColor: "#F8E7D8",
    marginVertical: "7%",
    paddingHorizontal: "43%",
    paddingVertical: "3%",
  },
});

export default Detail;
