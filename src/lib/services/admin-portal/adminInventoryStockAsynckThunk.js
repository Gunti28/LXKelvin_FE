
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchStockData = createAsyncThunk(
  "stock/fetchStockData",
  async (_, thunkAPI) => {
    try {
      const response = await fetch("/mocks/admin-portal/adminInventoryStock.json");
      if (!response.ok) {
        throw new Error("Failed to fetch stock data");
      }
      const data = await response.json();
      return data; 
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
