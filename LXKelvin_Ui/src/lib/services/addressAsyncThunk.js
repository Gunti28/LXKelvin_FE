import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch all addresses
export const fetchAddresses = createAsyncThunk(
  "addresses/fetchAddresses",
  async () => {
    const response = await axios.get("/mocks/addresses.json");
    return response.data.addresses;
  }
);

// Update an address
export const updateAddress = createAsyncThunk(
  "addresses/updateAddress",
  async (updatedAddress) => {
    // await axios.put(`/api/addresses/${updatedAddress.id}`, updatedAddress);
    return updatedAddress;
  }
);

// Delete an address
export const deleteAddress = createAsyncThunk(
  "addresses/deleteAddress",
  async (id) => {
    // await axios.delete(`/api/addresses/${id}`);
    return id;
  }
);
