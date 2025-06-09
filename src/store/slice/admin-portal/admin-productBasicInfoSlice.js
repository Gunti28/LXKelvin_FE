import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  sku: "",
  category: "",
  tags: [],
  brand: "",
  description: "",
  longDescription: "",
  status: "Active",
};

const basicInfoSlice = createSlice({
  name: "basicInfo",
  initialState,
  reducers: {
    updateBasicInfoField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    addTag: (state, action) => {
      const tag = action.payload.trim();
      if (tag && !state.tags.includes(tag)) {
        state.tags.push(tag);
      }
    },
    removeTag: (state, action) => {
      state.tags = state.tags.filter((tag) => tag !== action.payload);
    },
  },
});

export const { updateBasicInfoField, addTag, removeTag } = basicInfoSlice.actions;
export default basicInfoSlice.reducer;
