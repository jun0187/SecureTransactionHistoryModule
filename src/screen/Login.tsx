import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { BIOMETRIC_TYPE } from "../constant";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { authenticateBiometric } from "../services/Biometric.service";
import { useDispatch, useSelector } from "react-redux";
import StackContainer from "../component/StackContainer";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { setIsLogin } from "../reducer/Login.reducer";
import { RootState } from "../reducer/index.reducer";

const Login = () => {
  const styles = useStyle();
  const dispatch = useDispatch();

  const biometryType = useSelector(
    (state: RootState) => state.login.biometryType
  );

  const onPressAuth = async () => {
    // if biometricType is null, Next Button is show and navigate to Home screen
    dispatch(
      setIsLogin(biometryType !== null ? await authenticateBiometric() : true)
    );
  };

  const iconName = () => {
    if (biometryType === BIOMETRIC_TYPE.FACE_ID) return "face-recognition";
    else return "fingerprint";
  };

  return (
    <StackContainer style={styles.container}>
      <Text style={styles.titleText}>Welcome</Text>
      <Image
        style={styles.logo}
        source={require("../../assets/ytl_sea_digital_bank_project_logo.jpeg")}
      />
      <TouchableOpacity
        onPress={onPressAuth}
        style={{ marginHorizontal: "7%" }}
      >
        <View style={styles.biometricLogin}>
          <Text style={styles.text}>
            {biometryType !== null ? "Biometric Login" : "Next"}
          </Text>

          {biometryType !== null && <Icon name={iconName()} size={40} />}
        </View>
      </TouchableOpacity>
    </StackContainer>
  );
};

const useStyle = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingBottom: "20%",
    },
    biometricLogin: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      borderRadius: 30,
      backgroundColor: Colors.light,
      paddingVertical: "7%",
      paddingHorizontal: "15%",
    },
    logo: {
      width: 250,
      height: 250,
    },
    titleText: {
      fontSize: 26,
      fontWeight: "bold",
    },
    text: {
      fontSize: 16,
    },
  });
export default Login;
