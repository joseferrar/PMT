import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    authData: [],
  },

  reducers: {
    AuthAction: (state, { payload }) => {
      state.data = payload;
    },
  },
});

export const { AuthAction } = authSlice.actions;

const authReducer = authSlice.reducer;
export default authReducer;
