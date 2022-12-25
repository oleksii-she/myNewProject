import { createSlice } from "@reduxjs/toolkit";

const state = {
  userId: null,
  nickName: null,
  stateChange: false,
  statusSignUpUser: null,
  statusSignInUser: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: state,
  reducers: {
    updateUserProfile: (state, { payload }) => ({
      ...state,
      userId: payload.userId,
      nickName: payload.nickName,
    }),

    authStateChange: (state, { payload }) => ({
      ...state,
      stateChange: payload.stateChange,
    }),

    authSignOut: () => state,

    errorStatusSignUpUser: (state, { payload }) => ({
      ...state,
      statusSignUpUser: payload.statusSignUpUser,
    }),

    errorSignInUser: (state, { payload }) => ({
      ...state,
      statusSignInUser: payload.statusSignInUser,
    }),
  },
});
