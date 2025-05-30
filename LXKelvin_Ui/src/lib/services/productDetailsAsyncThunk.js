// productThunk.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductDetails = createAsyncThunk(
  "productDetails/fetchProductDetails",
  async (id) => {
    const response = await axios.get("/mocks/productDetails.json");
    const allProducts = response.data.productDetails;
    const product = allProducts.find(
      (item) => item.id === id || item.id === Number(id)
    );

    if (!product) throw new Error("Product not found");

    return product;
  }
);
