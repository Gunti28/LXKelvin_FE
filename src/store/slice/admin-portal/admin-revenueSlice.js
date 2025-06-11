import { createSlice } from "@reduxjs/toolkit";
import { fetchRevenueSummary } from "../../../lib/services/admin-portal/adminRevenueAsyncThunk";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const adminRevenueSlice = createSlice({
  name: "adminDashboardRevenue",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRevenueSummary.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRevenueSummary.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchRevenueSummary.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default adminRevenueSlice.reducer;
