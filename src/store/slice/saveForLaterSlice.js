import { createSlice } from "@reduxjs/toolkit";
import { fetchSavedItems } from "../../lib/services/saveForLaterAsyncThunk";

const saveForLaterSlice = createSlice({
  name: "saveForLater",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSavedItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSavedItems.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchSavedItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default saveForLaterSlice.reducer;
