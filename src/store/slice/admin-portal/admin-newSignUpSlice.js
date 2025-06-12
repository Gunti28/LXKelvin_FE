import { createSlice } from "@reduxjs/toolkit";
import { fetchNewSignups } from "../../../lib/services/admin-portal/adminNewSignUpAsyncthunk";

const newSignUpsSlice = createSlice({
  name: "adminDashboardNewSignups",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewSignups.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNewSignups.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchNewSignups.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default newSignUpsSlice.reducer;
