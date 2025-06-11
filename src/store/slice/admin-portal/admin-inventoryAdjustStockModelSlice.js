
import { createSlice } from "@reduxjs/toolkit";

const adminInventoryAdjustStockSlice = createSlice({
  name: "adminInventoryAdjustStock",
  initialState: {
    isModalOpen: false,
    selectedProduct: null,
    adjustmentType: "Set Stock",
    quantity: 0,
    reason: "Purchase",
    notes: "",
    referenceNumber: "",
  },
  reducers: {
    openAdjustStockModal: (state, action) => {
      state.isModalOpen = true;
      state.selectedProduct = action.payload;
    },
    closeAdjustStockModal: (state) => {
      state.isModalOpen = false;
      state.selectedProduct = null;
      state.adjustmentType = "Set Stock";
      state.quantity = 0;
      state.reason = "Purchase";
      state.notes = "";
      state.referenceNumber = "";
    },
    setAdjustmentType(state, action) {
      state.adjustmentType = action.payload;
    },
    setQuantity(state, action) {
      state.quantity = action.payload;
    },
    setReason(state, action) {
      state.reason = action.payload;
    },
    setNotes(state, action) {
      state.notes = action.payload;
    },
    setReferenceNumber(state, action) {
      state.referenceNumber = action.payload;
    },
  },
});

export const {
  openAdjustStockModal,
  closeAdjustStockModal,
  setAdjustmentType,
  setQuantity,
  setReason,
  setNotes,
  setReferenceNumber,
} = adminInventoryAdjustStockSlice.actions;


export default adminInventoryAdjustStockSlice.reducer;
