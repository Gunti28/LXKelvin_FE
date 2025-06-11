import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  regular: "",
  sale: "",
  taxSetting: "Standard Rate",
  taxExempt: false,
  onSale: false,
  status: "Active", 
};

const pricingSlice = createSlice({
  name: "adminProductPricing",
  initialState,
  reducers: {
    updatePricingField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    resetPricing: () => initialState,
  },
});

export const { updatePricingField, resetPricing } = pricingSlice.actions;

export default pricingSlice.reducer;
