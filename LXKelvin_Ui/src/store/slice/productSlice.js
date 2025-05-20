import { createSlice } from "@reduxjs/toolkit";
import {fetchProducts} from '../../lib/services/productsAsyncThunk';


/**
 * initial state for the Slice
 */
const initialState ={
    products:[],
    status: 'init',
    error: null,
};

/**
 * creation for the slice
 */
const productsSlice = createSlice({
    name:"products",
    initialState,
    reducers:{
    /**
     * need to write the actions based on the usage
     * 
     */
    },
    extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

/**
 * exporting actions, reducers
 */
// export const {} = productsSlice.actions;
export default productsSlice.reducer;
