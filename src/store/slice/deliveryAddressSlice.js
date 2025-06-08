import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// thunk to load addresses from public/mocks/address.json
export const fetchAddresses = createAsyncThunk(
  "addresses/fetchAddresses",
  async () => {
    const response = await fetch("/mocks/address.json");
    if (!response.ok) {
      throw new Error("Failed to fetch addresses");
    }
    const data = await response.json();
    return data.addresses;
  }
);

const addressSlice = createSlice({
  name: "addresses",
  initialState: {
    list: [],
    currentAddress: {
      houseNo: "",
      landMark: "",
      city: "",
      state: "",
      pincode: "",
      type: "home",
      lat: null,
      lng: null,
    },
    loading: false,
    error: null,
  },
  reducers: {
    setCurrentAddress(state, action) {
      state.currentAddress = action.payload;
    },
    updateCurrentAddress: (state, action) => {
      state.currentAddress = { ...state.currentAddress, ...action.payload };
      localStorage.setItem(
        "selectedAddress",
        JSON.stringify(state.currentAddress)
      );
    },

    saveCurrentAddress(state) {
      if (!state.currentAddress) return;
      const idx = state.list.findIndex((a) => a.id === state.currentAddress.id);
      if (idx !== -1) {
        state.list[idx] = state.currentAddress;
      } else {
        state.list.push(state.currentAddress);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddresses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAddresses.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
        state.currentAddress = action.payload[0]
          ? {
              ...state.currentAddress,
              ...action.payload[0],
            }
          : {
              houseNo: "",
              landMark: "",
              city: "",
              state: "",
              pincode: "",
              type: "home",
              lat: null,
              lng: null,
            };
      })
      .addCase(fetchAddresses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setCurrentAddress, updateCurrentAddress, saveCurrentAddress } =
  addressSlice.actions;

export default addressSlice.reducer;
