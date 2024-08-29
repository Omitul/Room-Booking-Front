import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getRoleFromLocalStorage,
  setRoleToLocalStorage,
  removeRoleFromLocalStorage,
} from "../../../utils/localStorage";

type AuthState = {
  role: string | null;
};

const initialState: AuthState = {
  role: getRoleFromLocalStorage(),
};

const authSlices = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserRole: (state, action: PayloadAction<string>) => {
      state.role = action.payload;
      setRoleToLocalStorage(action.payload);
    },
    logout: (state) => {
      state.role = null;
      removeRoleFromLocalStorage();
    },
  },
});

export const { setUserRole, logout } = authSlices.actions;

export default authSlices.reducer;
