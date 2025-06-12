
import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  userAuth: null,
};

const authSlice = createSlice({
  name: 'auth', 
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.userAuth = action.payload;
      localStorage.setItem('registeredUser', JSON.stringify(action.payload));
    },
    loginUser: (state, action) => {
      state.userAuth = action.payload;
    },
  },
});


export const { registerUser, loginUser } = authSlice.actions;
export default authSlice.reducer;

