import { combineReducers } from "@reduxjs/toolkit";
import LoginReducer from "./Login.reducer";
import TrxHistoryReducer from "./TrxHistory.reducer";
export const rootReducer = combineReducers({
  trxHistory: TrxHistoryReducer,
  login: LoginReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
