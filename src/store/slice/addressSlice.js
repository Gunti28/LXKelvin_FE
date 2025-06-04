import { createSlice } from "@reduxjs/toolkit";
import { fetchAddresses, updateAddress, deleteAddress } from "../../lib/services/addressAsyncThunk";

// Slice
const addressSlice = createSlice({
  name: "address",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch
      .addCase(fetchAddresses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAddresses.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchAddresses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Update
      .addCase(updateAddress.fulfilled, (state, action) => {
        const updated = action.payload;
        const index = state.list.findIndex((addr) => addr.id === updated.id);
        if (index !== -1) {
          state.list[index] = updated;
        }
      })

      // Delete
      .addCase(deleteAddress.fulfilled, (state, action) => {
        const id = action.payload;
        state.list = state.list.filter((addr) => addr.id !== id);
      });
  },
});

export default addressSlice.reducer;