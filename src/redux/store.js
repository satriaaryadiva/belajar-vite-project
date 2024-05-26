// store.js
import { configureStore  } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import cartMiddleware from './slices/cartMiddleware';
import authReducer from './slices/authSlice'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth:authReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cartMiddleware),
});

export default store;
