import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchOrderMeta = createAsyncThunk(
  "orderMeta/fetchOrderMeta",
  async () => {
    const res = await fetch("/mocks/orderTracking.json");
    if (!res.ok) throw new Error("Failed to fetch order metadata");
    return await res.json();
  }
);

const initialState = {
  bikePosition: 0,
  orderNumber: "",
  createdAt: "",
  lastUpdate: "",
  onTimeMessage: "",
  vatPercentage: 0,
  deliveryFee: 0,
  items: [],
  status: "idle",
  error: null,
};

const orderMetaSlice = createSlice({
  name: "orderMeta",
  initialState,
  reducers: {
    setOrderMeta: (state, action) => {
      Object.assign(state, action.payload);
    },
    clearOrderMeta: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrderMeta.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchOrderMeta.fulfilled, (state, action) => {
        Object.assign(state, action.payload);
        state.status = "succeeded";
      })
      .addCase(fetchOrderMeta.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setOrderMeta, clearOrderMeta } = orderMetaSlice.actions;
export default orderMetaSlice.reducer; 