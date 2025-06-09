import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchOrders = createAsyncThunk(
  "companyDashboard/fetchOrders",
  async () => {
    const response = await axios.get("/mocks/admin-portal/adminDashboardOrders.json");
    return response.data.orders;
  }
);
