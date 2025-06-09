import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts, addProduct, updateProduct, deleteProduct } from "../../../lib/services/admin-portal/adminProductAsyncThunk";

const adminProductsSlice = createSlice({
  name: "adminProducts",
  initialState: {
    products: [],
    filteredProducts: [],
    filters: {
      category: "",
      minPrice: "",
      maxPrice: "",
      inventory: "",
      status: "",
      searchText: ""
    },
    selectedProducts: [],
    loading: false,
    error: null,
  },
  reducers: {
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
      state.filteredProducts = applyFilters(state.products, state.filters);
    },
    setSearchText: (state, action) => {
      state.filters.searchText = action.payload;
      state.filteredProducts = applyFilters(state.products, state.filters);
    },
    toggleSelectProduct: (state, action) => {
      const productId = action.payload;
      if (state.selectedProducts.includes(productId)) {
        state.selectedProducts = state.selectedProducts.filter(id => id !== productId);
      } else {
        state.selectedProducts.push(productId);
      }
    },
    toggleSelectAll: (state, action) => {
      const pageProducts = action.payload;
      const pageIds = pageProducts.map(p => p.id);
      const allSelected = pageIds.every(id => state.selectedProducts.includes(id));
      
      if (allSelected) {
        state.selectedProducts = state.selectedProducts.filter(id => !pageIds.includes(id));
      } else {
        const newSelected = [...new Set([...state.selectedProducts, ...pageIds])];
        state.selectedProducts = newSelected;
      }
    },
    clearSelectedProducts: (state) => {
      state.selectedProducts = [];
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Products
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.filteredProducts = applyFilters(state.products, state.filters);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Add Product
      .addCase(addProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
        state.filteredProducts = applyFilters(state.products, state.filters);
      })
      // Update Product
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.products.findIndex(p => p.id === action.payload.id);
        if (index !== -1) {
          state.products[index] = action.payload;
          state.filteredProducts = applyFilters(state.products, state.filters);
        }
      })
      // Delete Product
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter(p => p.id !== action.payload);
        state.selectedProducts = state.selectedProducts.filter(id => id !== action.payload);
        state.filteredProducts = applyFilters(state.products, state.filters);
      });
  },
});

function applyFilters(products, filters) {
  return products.filter(product => {
    // Category filter
    if (filters.category && product.category !== filters.category) {
      return false;
    }
    
    // Price range filters
    if (filters.minPrice && product.price < parseFloat(filters.minPrice)) {
      return false;
    }
    
    if (filters.maxPrice && product.price > parseFloat(filters.maxPrice)) {
      return false;
    }
    
    // Status filter
    if (filters.status && product.status !== filters.status) {
      return false;
    }
    
    // Search text filter
    if (filters.searchText) {
      const search = filters.searchText.toLowerCase();
      if (
        !product.id.toLowerCase().includes(search) &&
        !product.name.toLowerCase().includes(search) &&
        !product.category.toLowerCase().includes(search)
      ) {
        return false;
      }
    }
    
    return true;
  });
}

export const { 
  setFilters, 
  setSearchText, 
  toggleSelectProduct, 
  toggleSelectAll, 
  clearSelectedProducts 
} = adminProductsSlice.actions;

export default adminProductsSlice.reducer;