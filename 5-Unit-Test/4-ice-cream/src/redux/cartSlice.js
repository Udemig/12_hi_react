import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      alert("sepete eklendi");
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
