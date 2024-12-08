import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { useSelector } from "react-redux";
import Home from "./screen/Home";
import { store } from "./store";
import { NAVIGATION } from "./constant";
import Login from "./screen/Login";
import Detail from "./screen/Detail";
import { getBiometryTypeAction } from "./saga/Login.saga";
import { getTrxHistoryListAction } from "./saga/TrxHistory.saga";

const Stack = createStackNavigator();

const Navigation = () => {
  const isLogin = useSelector((state: any) => state.login.isLogin);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isLogin ? (
          <Stack.Screen
            name={NAVIGATION.LOGIN}
            component={Login}
            options={{ headerShown: false }}
            listeners={{
              focus: () => {
                store.dispatch(getBiometryTypeAction());
              },
            }}
          />
        ) : (
          <>
            <Stack.Screen
              name={NAVIGATION.HOME}
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name={NAVIGATION.DETAIL}
              component={Detail}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
