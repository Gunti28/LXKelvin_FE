import { createAsyncThunk } from "@reduxjs/toolkit";
// import axiosInstance from './axiosInstanceConnect';
import axios from "axios";
/**
 *  Define the async thunk for fetchProducts
 */
export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response = await axios.get("/mocks/categories.json");
    // console.log(response.data.categories);
    return response.data.categories;
  }
);
