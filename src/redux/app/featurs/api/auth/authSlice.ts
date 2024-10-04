import { RootState } from "@/redux/app/store";
import { IUser } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";

type TAuthSlice = {
  user: null | IUser;
  token: null | object;
};
const initialState: TAuthSlice = {
  user: null,
  token: null,
};
export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    signUser: (state, action) => {
      const { userData, token } = action.payload;
      state.user = userData;
      state.token = token;
    },
    logoutUser: (state) => {
      state.token = null;
      state.user = null;
    },
  },
});
export const { signUser, logoutUser } = authSlice.actions;
export const useCurrnetToken = (state: RootState) => state.auth.token;
export const useCurrnetUser = (state: RootState) => state.auth.user;
export default authSlice.reducer;
