import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchActiveUsers = createAsyncThunk(
  "companyDashboard/fetchActiveUsers",
  async () => {
    const response = await axios.get("/mocks/admin-portal/adminActiveUsers.json");
    return response.data.activeUsers;
  }
);
