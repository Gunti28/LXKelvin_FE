import { createSlice } from "@reduxjs/toolkit";
import { fetchAlerts } from "../../../lib/services/admin-portal/adminAlertsAsyncThunk";

const adminDashboardAlertsSlice = createSlice({
  name: "adminDashboardAlerts",
  initialState: {
    alerts: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAlerts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAlerts.fulfilled, (state, action) => {
        state.loading = false;
        state.alerts = action.payload;
      })
      .addCase(fetchAlerts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default adminDashboardAlertsSlice.reducer;
