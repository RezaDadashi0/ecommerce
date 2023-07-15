import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogsIn: (state, action) => {
      state.username = action.payload.username;
    },
    userLogsOut: (state, action) => {
      if (action.payload) state.username = "";
    },
  },
});

export const { userLogsIn, userLogsOut } = userSlice.actions;
export default userSlice.reducer;
