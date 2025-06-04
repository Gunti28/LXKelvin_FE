import { createSlice } from "@reduxjs/toolkit";
import { fetchPlans } from "../../lib/services/subscriptionCardAsyncThunk";

const plansSlice = createSlice({
  name: "plans",
  initialState: {
    plans: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlans.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPlans.fulfilled, (state, action) => {
        state.loading = false;
        state.plans = action.payload;
      })
      .addCase(fetchPlans.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default plansSlice.reducer;
