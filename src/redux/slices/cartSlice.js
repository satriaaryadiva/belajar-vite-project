// slices/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { data: JSON.parse(localStorage.getItem('cart')) || [] },
  reducers: {
    addToCart(state, action) {
      const itemInCart = state.data.find(item => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.qty += 1;
      } else {
        state.data.push({ ...action.payload, qty: 1 });
      }
      localStorage.setItem('cart', JSON.stringify(state.data));
    },
    removeFromCart(state, action) {
      const itemId = action.payload;
      state.data = state.data.filter(item => item.id !== itemId);
      localStorage.setItem('cart', JSON.stringify(state.data));
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
