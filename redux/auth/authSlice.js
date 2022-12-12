import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    userId: null,
    nickName: null,
  },
  reducers: {
    setUSer(state, action) {
      state.userId = action.payload.email;
      state.nickName = action.payload.email;
      state.email = action.payload.email;
      state.token = action.payload.email;
    },
    removeUSer(state) {
      state.userId = null;
      state.nickName = null;
      state.email = null;
      state.token = null;
    },
  },
});
