import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getOtp = createAsyncThunk("sigIn/getOtp", async () => {
  const response = await axios.get("/mocks/signOtp.json");
  const data = response.data;
  return data;
});
