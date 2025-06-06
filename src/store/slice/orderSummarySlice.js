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
    address: {},
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
          address,
          selectedPaymentMethod,
          itemsPrice,
          deliveryCharges,
          vatRate,
          promotionDiscount,
        } = action.payload;
        state.address = address;
        state.selectedPaymentMethod = selectedPaymentMethod;
        state.itemsPrice = itemsPrice;
        state.deliveryCharges = deliveryCharges;
        state.vatRate = vatRate;
        state.promotionDiscount = promotionDiscount;
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