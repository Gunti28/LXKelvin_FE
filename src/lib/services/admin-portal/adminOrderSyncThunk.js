
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchOrders = createAsyncThunk("orders/fetchOrders", async () => {
  const response = await fetch("/mocks/admin-portal/adminOrders.json");
  const data = await response.json();
  return data;
});
