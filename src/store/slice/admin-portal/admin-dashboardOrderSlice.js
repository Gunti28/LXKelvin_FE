import { createSlice } from "@reduxjs/toolkit";
import { fetchOrders } from "../../../lib/services/admin-portal/adminDashboardOrderAsyncThunk";

const adminDashboardOrdersSlice = createSlice({
  name: "adminDashboardOrders",
  initialState: {
    orders: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default adminDashboardOrdersSlice.reducer;
