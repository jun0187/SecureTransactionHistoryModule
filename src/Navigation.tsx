import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Home from "./screen/Home";
import { NAVIGATION } from "./constant";
import Login from "./screen/Login";
import Detail from "./screen/Detail";
import { getBiometryTypeAction } from "./saga/Login.saga";
import { RootState } from "./reducer/index.reducer";

const Stack = createStackNavigator();

const Navigation = () => {
  const isLogin = useSelector((state: RootState) => state.login.isLogin);
  const dispatch = useDispatch();

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
                dispatch(getBiometryTypeAction());
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
