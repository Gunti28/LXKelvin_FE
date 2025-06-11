
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  main: null,
  gallery: [],
  status: "Active",
};

const adminProductImagesSlice = createSlice({
  name: "adminProductImages",
  initialState,
  reducers: {
    setMainImage: (state, action) => {
      state.main = action.payload;
    },
    setGalleryImages: (state, action) => {
      state.gallery = action.payload;
    },
    addGalleryImage: (state, action) => {
      const imageWithId = {
        id: Date.now() + Math.random(), // Generate unique ID
        url: action.payload,
      };
      state.gallery.push(imageWithId);
    },
    removeGalleryImage: (state, action) => {
      state.gallery = state.gallery.filter((img) => img.id !== action.payload);
    },
    reorderGalleryImage: (state, action) => {
      const { fromIndex, toIndex } = action.payload;
      const updated = [...state.gallery];
      const [moved] = updated.splice(fromIndex, 1);
      updated.splice(toIndex, 0, moved);
      state.gallery = updated;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const {
  setMainImage,
  setGalleryImages,
  addGalleryImage,
  removeGalleryImage,
  reorderGalleryImage,
  setStatus,
} = adminProductImagesSlice.actions;

export default adminProductImagesSlice.reducer;