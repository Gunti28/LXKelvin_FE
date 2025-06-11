import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCartItems = createAsyncThunk(
  'cart/fetchCartItems',
  async () => {
    const response = await fetch('/mocks/cartPage.json');
    if (!response.ok) {
      throw new Error('Failed to fetch cart items');
    }
    const data = await response.json();
    return data.cartPage;
  }
);

export const deleteCartItem = createAsyncThunk(
  'cart/deleteCartItem',
  async (id) => {
    return id;
  }
);

export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async ({ id, quantity = 1 }, thunkAPI) => {
    const state = thunkAPI.getState();

    const allProducts = state.products.products;
    const itemToAdd = allProducts.find(item => item.id === id);

    if (!itemToAdd) {
      return thunkAPI.rejectWithValue('Item not found');
    }

    return { ...itemToAdd, quantity }; 
  }
);