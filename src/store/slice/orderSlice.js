import { createSlice } from "@reduxjs/toolkit";
import { fetchOrders } from "../../lib/services/ordersAsyncThunk";

const LOCAL_STORAGE_KEY = "customOrders";

const orderSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addOrder: (state, action) => {
      // Add new order to the beginning of the list
      state.orders.unshift(action.payload);

      // Save to localStorage
      const savedOrders =
        JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
      savedOrders.unshift(action.payload);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(savedOrders));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.status = "succeeded";

        // Retrieve locally stored custom orders
        const savedOrders =
          JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];

        // Avoid duplication by checking IDs
        const fetchedIds = new Set(action.payload.map((order) => order.id));
        const filteredSaved = savedOrders.filter(
          (order) => !fetchedIds.has(order.id)
        );

        // Merge local + fetched
        state.orders = [...filteredSaved, ...action.payload];
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addOrder } = orderSlice.actions;
export default orderSlice.reducer;
