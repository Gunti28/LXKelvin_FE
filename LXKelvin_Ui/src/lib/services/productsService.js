import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosInstance from '../../lib/services/axiosInstanceConnect';
/**
 *  Define the async thunk for fetchProducts
 */
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await axiosInstance.get('/products');
    return response.data;
  }
)