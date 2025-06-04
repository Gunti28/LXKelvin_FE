import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getOtpAuth = createAsyncThunk("signIn/Auth", async () => {
  const response = await axios.get("/mocks/userAuth.json");
  return response.data.userAuth;
});
