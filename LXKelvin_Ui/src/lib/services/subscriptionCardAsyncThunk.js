import { createAsyncThunk } from "@reduxjs/toolkit";
import plansData from "../../../public/mocks/SubscriptionCard.json";

export const fetchPlans = createAsyncThunk("plans/fetchPlans", async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(plansData.plans);
    }, 500);
  });
});
