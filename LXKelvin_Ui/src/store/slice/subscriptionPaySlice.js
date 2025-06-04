import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedPlanId: null,
  paymentMethod: null,
  price: null,
  isConfirmed: false,
  selectedUpiApp: null,
  upiId: "",
};

const subscriptionSlice = createSlice({
  name: "subscription",
  initialState,
  reducers: {
    setSelectedPlanId: (state, action) => {
      state.selectedPlanId = action.payload;
      state.isConfirmed = false;
    },
    setPaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
      state.isConfirmed = false;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
      state.isConfirmed = false;
    },
    setSelectedUpiApp: (state, action) => {
      state.selectedUpiApp = action.payload;
    },
    setUpiId: (state, action) => {
      state.upiId = action.payload;
    },

    confirmSubscription: (state) => {
      state.isConfirmed = true;
    },
    resetSubscription: () => initialState,
  },
});

export const {
  setSelectedPlanId,
  setPaymentMethod,
  setPrice,
  confirmSubscription,
  setSelectedUpiApp,
  setUpiId,
  resetSubscription,
} = subscriptionSlice.actions;

export default subscriptionSlice.reducer;
