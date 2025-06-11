
import { createSlice } from "@reduxjs/toolkit";
import { fetchStockData } from "../../../lib/services/admin-portal/adminInventoryStockAsynckThunk";

const adminInventoryStockSlice = createSlice({
  name: "adminInventoryStock",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStockData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStockData.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchStockData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default adminInventoryStockSlice.reducer;
