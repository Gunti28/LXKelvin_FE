import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAlerts = createAsyncThunk(
  "companyDashboard/fetchAlerts",
  async () => {
    const response = await axios.get("/mocks/admin-portal/adminDashboardAlerts.json");
    return response.data.alerts;
  }
);
