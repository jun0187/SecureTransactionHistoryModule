import React, { ReactNode } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  ViewStyle,
  Text,
  useColorScheme,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

interface StackContainerProps {
  children: ReactNode;
  style?: ViewStyle;
  title?: string;
}
const StackContainer = (props: StackContainerProps) => {
  const { children, style, title } = props;
  const backgroundStyle = () => {
    return {
      backgroundColor: useColorScheme() === "dark" ? Colors.darker : "white",
      flex: 1,
    };
  };
  return (
    <SafeAreaView style={backgroundStyle()}>
      <View style={[styles.container, style]}>
        <View style={styles.innerContainer}>
          <View
            style={{
              flex: 5,
              alignItems: "center",
            }}
          >
            {title && <Text style={styles.titleText}>{title}</Text>}
          </View>
        </View>
        {children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    flexDirection: "row",
    width: "90%",
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Cochin",
    paddingBottom: "3%",
  },
});

export default StackContainer;
