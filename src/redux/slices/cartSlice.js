import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: []
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.data.find(product => product.id === action.payload.id);
            if (item) {
                item.qty += 1; // Increment quantity if item already in cart
            } else {
                state.data.push({ id: action.payload.id, qty: 1 }); // Add new item to cart
            }
        },
        removeFromCart: (state, action) => {
            const index = state.data.findIndex(product => product.id === action.payload);
            if (index !== -1) {
                state.data.splice(index, 1); // Remove item from cart
            }
        },
        updateCartQuantity: (state, action) => {
            const { id, qty } = action.payload;
            const item = state.data.find(product => product.id === id);
            if (item) {
                item.qty = qty; // Update item quantity
            }
        }
    }
});

// Selectors
export const selectCartItems = (state) => state.cart.data;

export const selectTotalCartItems = (state) =>
    state.cart.data.reduce((acc, item) => acc + item.qty, 0);

export const { addToCart, removeFromCart, updateCartQuantity } = cartSlice.actions;
export default cartSlice.reducer;
