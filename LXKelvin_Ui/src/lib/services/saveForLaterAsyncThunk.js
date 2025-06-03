
import { createAsyncThunk } from '@reduxjs/toolkit';
import data from '../../../public/mocks/saveForLater.json';

export const fetchSavedItems = createAsyncThunk(
  'saveForLater/fetchSavedItems',
  async () => {
    return data.savedItems;
  }
);