import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { data: [] }, // Mengubah initialState untuk memiliki array kosong
  reducers: {
    addToCart(state, action) {
        const  itemInCart=state.data.find(
            (item) => item.id === action.payload.id
        );
        if (itemInCart) {
            itemInCart.qty += 1;
        } else {
            state.data.push({ ...action.payload, qty: 1 });
        }
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
