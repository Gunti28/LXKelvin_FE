import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRevenueSummary = createAsyncThunk(
  "adminDashboardRevenue/fetchRevenueSummary",
  async () => {
    const response = await axios.get("/mocks/admin-portal/adminDashboardRevenue.json");
    return response.data.revenue;
  }
);

