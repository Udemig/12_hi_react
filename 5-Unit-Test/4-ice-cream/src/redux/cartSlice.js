import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      // septte aynı üründen var mı
      const found = state.cart.find((item) => item.id === payload.item.id && item.type === payload.selectedType);

      if (found) {
        // eğer sepette aynı üründen varsa miktarını arttır
        found.amount++;
      } else {
        // eğer yoksa yeni ürünü sepete ekle
        state.cart.push({
          ...payload.item,
          type: payload.selectedType,
          amount: 1,
        });
      }
    },

    deleteFromCart: (state, { payload }) => {
      // sepetteki ürünü bul
      const index = state.cart.findIndex((item) => item.id === payload.id && item.type === payload.type);

      if (state.cart[index].amount > 1) {
        // eğer miktarı 1'den fazlaysa miktarını azalt
        state.cart[index].amount--;
      } else {
        // eğer miktarı 1 ise ürünü kaldır
        state.cart.splice(index, 1);
      }
    },

    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart, deleteFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
