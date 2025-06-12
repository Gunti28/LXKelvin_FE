import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCartItems,
  deleteCartItem,
  addToCart as addToCartThunk,
} from "../../lib/services/cartAsyncThunk";

const initialState = {
  items: [],
  selectedOptions: {},
  status: "idle",
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateWeight: (state, action) => {
      const { id, weight } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item && item.priceByWeight?.[weight]) {
        item.selectedWeight = weight;
        item.price = item.priceByWeight[weight];
      }
    },

    updateQuantity(state, action) {
      const { id, changeInQuantity } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.quantity += changeInQuantity;
        if (item.quantity < 1) {
          state.items = state.items.filter((i) => i.id !== id);
        }
      }
    },

    clearCart(state) {
      state.items = [];
      state.selectedOptions = {};
    },

    addToCart(state, action) {
      const {
        id,
        name,
        image,
        selectedWeight,
        priceByWeight,
        price,
        Colour,
        quantityChange = 1,
        originalPrice,
      } = action.payload;

      const effectivePrice =
        selectedWeight && priceByWeight?.[selectedWeight] !== undefined
          ? priceByWeight[selectedWeight]
          : price;

      const existing = state.items.find(
        (item) => item.id === id && item.selectedWeight === selectedWeight
      );

      if (existing) {
        existing.quantity += quantityChange;

        if (existing.quantity <= 0) {
          state.items = state.items.filter(
            (item) =>
              !(item.id === id && item.selectedWeight === selectedWeight)
          );
        }
      } else if (quantityChange > 0) {
        state.items.push({
          id,
          name,
          image,
          selectedWeight,
          price: effectivePrice,
          quantity: quantityChange,
          priceByWeight,
          originalPrice,
          Colour,
        });
      }
    },

    setProductWeightPreview(state, action) {
      const { id, weight } = action.payload;
      state.selectedOptions[id] = weight;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.status = "succeeded";

        state.items = action.payload.map((item) => {
          const weights = item.priceByWeight
            ? Object.keys(item.priceByWeight)
            : [];
          const selectedWeight =
            item.selectedWeight && weights.includes(item.selectedWeight)
              ? item.selectedWeight
              : weights.length > 0
              ? weights[0]
              : null;

          const price =
            selectedWeight && item.priceByWeight?.[selectedWeight] !== undefined
              ? item.priceByWeight[selectedWeight]
              : item.price;

          return {
            ...item,
            selectedWeight,
            price,
          };
        });
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteCartItem.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addCase(addToCartThunk.fulfilled, (state, action) => {
        const product = action.payload;
        const existing = state.items.find((item) => item.id === product.id);
        const quantityToAdd = product.quantity ?? 1;

        if (existing) {
          existing.quantity += quantityToAdd;
        } else {
          const weights = product.priceByWeight
            ? Object.keys(product.priceByWeight)
            : [];
          const selectedWeight =
            product.selectedWeight && weights.includes(product.selectedWeight)
              ? product.selectedWeight
              : weights.length > 0
              ? weights[0]
              : null;

          state.items.push({
            ...product,
            quantity: quantityToAdd,
            selectedWeight,
            price:
              selectedWeight &&
              product.priceByWeight?.[selectedWeight] !== undefined
                ? product.priceByWeight[selectedWeight]
                : product.price,
          });
        }
      });
  },
});

export const {
  updateWeight,
  updateQuantity,
  addToCart,
  setProductWeightPreview,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
