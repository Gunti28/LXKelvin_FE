import { createSlice } from "@reduxjs/toolkit";
import { getOtpAuth } from "../../lib/services/otpAuthAsyncThunk";

const initialState = {
  status: "init",
  error: null,
  userAuth: [],
  isUserValid: false,
};

const getOtpSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    setUserValid: (state, action) => {
      state.isUserValid = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOtpAuth.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getOtpAuth.fulfilled, (state, action) => {
        state.status = "success";
        state.userAuth = action.payload;
      })
      .addCase(getOtpAuth.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export const { setUserValid } = getOtpSlice.actions;
export default getOtpSlice.reducer;
