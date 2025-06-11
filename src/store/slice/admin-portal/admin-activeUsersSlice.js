import { createSlice } from "@reduxjs/toolkit";
import { fetchActiveUsers } from "../../../lib/services/admin-portal/adminActiveUsersAsyncThunk";

const adminDashboardActiveUsersSlice = createSlice({
  name: "adminDashboardActiveUsers",
  initialState: {
    activeUsers: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchActiveUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchActiveUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.activeUsers = action.payload;
      })
      .addCase(fetchActiveUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default adminDashboardActiveUsersSlice.reducer;
