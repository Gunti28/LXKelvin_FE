
import { createSlice } from "@reduxjs/toolkit";
import { fetchSalesReport } from "../../../lib/services/admin-portal/adminReportsAsyncThunk";

const adminSalesReportSlice = createSlice({
  name: "adminSalesReport",
  initialState: {
    salesByProduct: [],
    salesByCustomer: [],
    salesByCategory: [],
    salesByDate: [],
    summaryKPIs: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSalesReport.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSalesReport.fulfilled, (state, action) => {
        state.loading = false;
        state.salesByProduct = action.payload.salesByProduct || [];
        state.salesByCustomer = action.payload.salesByCustomer || [];
        state.salesByCategory = action.payload.salesByCategory || [];
        state.salesByDate = action.payload.salesByDate || [];
        state.summaryKPIs = action.payload.summaryKPIs || {};
      })
      .addCase(fetchSalesReport.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default adminSalesReportSlice.reducer;