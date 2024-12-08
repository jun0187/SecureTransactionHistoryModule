import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { BIOMETRIC_TYPE } from "../constant";

export interface LoginState {
  biometryType: BIOMETRIC_TYPE | null;
  isLogin: boolean;
}

const initialState: LoginState = {
  biometryType: null,
  isLogin: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setBiometricType: (state, action: PayloadAction<BIOMETRIC_TYPE | null>) => {
      state.biometryType = action.payload;
    },
    setIsLogin: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },
  },
});

export const { setBiometricType, setIsLogin } = loginSlice.actions;

export default loginSlice.reducer;
