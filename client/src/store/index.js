import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  username: null,
  userID: null,
};

let authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      console.log(action.payload);
      state.username = action.payload.username;
      state.userID = action.payload.userID;
    },
    setLogout: (state) => {
      state.username = null;
      state.userID = null;
    },
  },
});

export let { setLogin, setLogout } = authSlice.actions;

export default authSlice;
