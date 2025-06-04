import { createSlice } from "@reduxjs/toolkit";
import { fetchProductDetails } from "../../lib/services/productDetailsAsyncThunk";

const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState: {
    product: null,
    status: "idle",
    error: null,
  },
  reducers: {
    clearProductDetails: (state) => {
      state.product = null;
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDetails.pending, (state) => {
        state.status = "loading";
        state.error = null;
        state.product = null;
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.product = action.payload;
      })
      .addCase(fetchProductDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        state.product = null;
      });
  },
});

export const { clearProductDetails } = productDetailsSlice.actions;

export default productDetailsSlice.reducer;
