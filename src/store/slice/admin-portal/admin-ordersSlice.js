

import { createSlice } from "@reduxjs/toolkit";
import { fetchOrders } from "../../../lib/services/admin-portal/adminOrderSyncThunk";

const adminOrderSlice = createSlice({
  name: "adminOrders",
  initialState: {
    orders: [],
    filteredOrders: [],
    filters: {
      date: "",
      status: "",
      paymentMethod: "",
      minPrice: "",
      maxPrice: "",
    },
    loading: false,
    error: null,
  },
  reducers: {
    deleteOrder: (state, action) => {
      state.orders = state.orders.filter(order => order.id !== action.payload);
      state.filteredOrders = applyFilters(state.orders, state.filters);
    },
    editOrder: (state, action) => {
      const index = state.orders.findIndex(order => order.id === action.payload.id);
      if (index !== -1) {
        state.orders[index] = action.payload;
        state.filteredOrders = applyFilters(state.orders, state.filters);
      }
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
      state.filteredOrders = applyFilters(state.orders, state.filters);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
        state.filteredOrders = applyFilters(state.orders, state.filters);
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

function applyFilters(orders, filters) {
  return orders.filter(order => {
    // Date filter
    if (filters.date) {
      const orderDate = new Date(order.date).toISOString().split('T')[0];
      if (orderDate !== filters.date) {
        return false;
      }
    }
    
    // Status filter (maps to paymentStatus)
    if (filters.status && order.paymentStatus !== filters.status) {
      return false;
    }
    
    // Payment method filter
    if (filters.paymentMethod && order.paymentMethod !== filters.paymentMethod) {
      return false;
    }
    
    // Price range filters
    if (filters.minPrice && order.amount < parseFloat(filters.minPrice)) {
      return false;
    }
    
    if (filters.maxPrice && order.amount > parseFloat(filters.maxPrice)) {
      return false;
    }
    
    return true;
  });
}

export const { deleteOrder, editOrder, setFilters } = adminOrderSlice.actions;
export default adminOrderSlice.reducer;
