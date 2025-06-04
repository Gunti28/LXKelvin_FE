import { createSlice } from "@reduxjs/toolkit";
import { fetchCategories } from "../../lib/services/categoriesAsyncThunk";

/**
 * initial state for the Slice
 */
const initialState = {
  categories: [],
  categoriesStatus: "init",
  error: null,
};

/**
 * creation for the slice
 */
const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    /**
     * need to write the actions based on the usage
     *
     */
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.categoriesStatus = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categoriesStatus = "succeeded";
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.categoriesStatus = "failed";
        state.error = action.error.message;
      });
  },
});

/**
 * exporting actions, reducers
 */
// export const {} = productsSlice.actions;
export default categoriesSlice.reducer;
