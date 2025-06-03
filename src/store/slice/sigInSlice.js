import { createSlice } from "@reduxjs/toolkit";
import { getOtp } from "../../lib/services/signInAsyncThunk";

const initialState = {
  status: "init",
  error: null,
  otp: "",
};

const signInSlice = createSlice({
  name: "signIn",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOtp.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getOtp.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.otp = action.payload;
      })
      .addCase(getOtp.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default signInSlice.reducer;
