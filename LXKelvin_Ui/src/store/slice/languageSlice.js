import { createSlice } from "@reduxjs/toolkit";
import { Const } from "../../lib/constants/index";

const initialState = {
  selectedLang: Const.LANGUAGES[0],
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setSelectedLang: (state, action) => {
      state.selectedLang = action.payload;
    },
  },
});

export const { setSelectedLang } = languageSlice.actions;
export default languageSlice.reducer;
