
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stockQty: 0,
  lowStockThreshold: 0,
  manageStock: false,
  stockStatus: "In Stock",
  status: "Active", 
};

const adminProductInventorySlice = createSlice({
  name: "adminProductInventory",
  initialState,
  reducers: {
    updateInventoryField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    resetInventory: () => initialState,
  },
});

export const { updateInventoryField, resetInventory } = adminProductInventorySlice.actions;
export default adminProductInventorySlice.reducer;