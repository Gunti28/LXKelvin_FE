import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Can't cancel async requests inside slice reducers.
// Cancellation must be handled inside the async thunk before dispatching.
// By the time `.pending` is triggered, the request is already running.

// Fetching all addresses with cancellation support
export const fetchAddresses = createAsyncThunk(
  "addresses/fetchAddresses",
  async (_, { signal }) => {
    const source = axios.CancelToken.source();
    signal.addEventListener("abort", () => {
      source.cancel("Request cancelled");
    });

    const response = await axios.get("/mocks/address.json", {
      cancelToken: source.token,
    });
    return response.data.addresses;
  }
);

// Updating address
export const updateAddress = createAsyncThunk(
  "addresses/updateAddress",
  async (updatedAddress) => {
    // await axios.put(`/api/addresses/${updatedAddress.id}`, updatedAddress);
    return updatedAddress;
  }
);

// Deleting address
export const deleteAddress = createAsyncThunk(
  "addresses/deleteAddress",
  async (id) => {
    // await axios.delete(`/api/addresses/${id}`);
    return id;
  }
);
