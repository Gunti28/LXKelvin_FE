import { createAsyncThunk } from "@reduxjs/toolkit";
// import axiosInstance from './axiosInstanceConnect';
import axios from "axios";
/**
 *  Define the async thunk for fetchProducts
 */
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get("/mocks/products.json");
    // console.log(response.data.products);
    return response.data.products;
  }
);
