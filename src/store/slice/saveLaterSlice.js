import { createSlice } from "@reduxjs/toolkit";

const savedItemsSlice = createSlice({
  name: "savedItems",
  initialState: [],
  reducers: {
    addSavedItem: (state, action) => {
      const exists = state.find((item) => item.id === action.payload.id);
      if (!exists) {
        state.push(action.payload);
      }
    },
    removeSavedItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addSavedItem, removeSavedItem } = savedItemsSlice.actions;
export default savedItemsSlice.reducer;
