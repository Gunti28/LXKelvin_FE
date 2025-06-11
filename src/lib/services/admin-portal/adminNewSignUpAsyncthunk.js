

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchNewSignups = createAsyncThunk(
  "companyDashboard/fetchNewSignups",
  async () => {
    const response = await axios.get("/mocks/admin-portal/adminNewSignUps.json");
    return response.data.newSignups;
  }
);
