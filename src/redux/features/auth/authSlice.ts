import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getRoleFromLocalStorage,
  setRoleToLocalStorage,
  removeRoleFromLocalStorage,
  getTokenFromLocalStorage,
  setTokenToLocalStorage,
  removeTokenFromLocalStorage,
} from "../../../utils/localStorage";

type AuthState = {
  role: string | null;
  token: string | null;
};

const initialState: AuthState = {
  role: getRoleFromLocalStorage(),
  token: getTokenFromLocalStorage(),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserRole: (state, action: PayloadAction<string>) => {
      state.role = action.payload;
      setRoleToLocalStorage(action.payload);
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      setTokenToLocalStorage(action.payload);
    },
    logout: (state) => {
      state.role = null;
      state.token = null;
      removeRoleFromLocalStorage();
      removeTokenFromLocalStorage();
    },
  },
});

export const { setUserRole, setToken, logout } = authSlice.actions;

export default authSlice.reducer;
