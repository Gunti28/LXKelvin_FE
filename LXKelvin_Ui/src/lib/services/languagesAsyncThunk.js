import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
/**
 *  Define the async thunk for fetchProducts
 */
export const fetchProducts = createAsyncThunk(
  "../constants/index.js",
  async () => {
    const response = await axios.get("/mocks/products.json");
    return response.data.products;
  }
);