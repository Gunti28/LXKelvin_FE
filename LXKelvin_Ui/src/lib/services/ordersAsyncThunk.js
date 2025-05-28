
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchOrders = createAsyncThunk("orders/fetchOrders", async () => {
  const response = await fetch("/mocks/orderHistory.json");
  const data = await response.json();
  return data.orderHistory;
}); 