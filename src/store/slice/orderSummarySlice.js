import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchOrderSummary = createAsyncThunk(
  "orderSummary/fetchOrderSummary",
  async () => {
    const response = await fetch("/mocks/orderSummary.json");
    const data = await response.json();
    return data;
  }
);

const orderSummarySlice = createSlice({
  name: "orderSummary",
  initialState: {
    selectedPaymentMethod: "",
    itemsPrice: 0,
    deliveryCharges: 0,
    vatRate: 0,
    promotionDiscount: 0,
    loading: false,
    error: null,
  },
  reducers: {
    setPaymentMethod(state, action) {
      state.selectedPaymentMethod = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrderSummary.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrderSummary.fulfilled, (state, action) => {
        const {
          selectedPaymentMethod,
          itemsPrice,
          deliveryCharges,
          vatRate,
          promotionDiscount,
        } = action.payload;
        state.selectedPaymentMethod = selectedPaymentMethod || "";
        state.itemsPrice = itemsPrice || 0;
        state.deliveryCharges = deliveryCharges || 0;
        state.vatRate = vatRate || 0;
        state.promotionDiscount = promotionDiscount || 0;
        state.loading = false;
      })
      .addCase(fetchOrderSummary.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to load order summary";
      });
  },
});

export const { setPaymentMethod } = orderSummarySlice.actions;
export default orderSummarySlice.reducer;
