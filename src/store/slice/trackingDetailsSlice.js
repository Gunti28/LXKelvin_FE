import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTrackingMock = createAsyncThunk(
  "tracking/fetchMock",
  async () => {
    const response = await fetch("/mocks/trackingDetails.json");
    const json = await response.json();
    return json.trackingDetails;
  }
);

const trackingDetailsSlice = createSlice({
  name: "tracking",
  initialState: {
    orderPlacedTime: "",
    partnerName: "",
    phone: "",
    address: "",
    partnerImage: "",
    status: "idle",
  },
  reducers: {}, // no actions to export here
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrackingMock.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTrackingMock.fulfilled, (state, action) => {
        return {
          ...state,
          ...action.payload,
          status: "succeeded",
        };
      })
      .addCase(fetchTrackingMock.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default trackingDetailsSlice.reducer;
