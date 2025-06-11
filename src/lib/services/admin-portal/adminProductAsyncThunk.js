import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts", 
  async () => {
    const response = await fetch("/mocks/admin-portal/adminProduct.json");
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const data = await response.json();
    return data;
  }
);

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (productData) => {
    const newProduct = {
      id: `PRD-${Date.now()}`,
      ...productData,
      createdAt: new Date().toISOString()
    };
    return newProduct;
  }
);

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (productData) => {
    return productData;
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (productId) => {
    return productId;
  }
);