// cartMiddleware.js
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToCart, removeFromCart } from '../slices/cartSlice.js';

const cartMiddleware = ( ) => (next) => (action) => {
  if (action.type === addToCart.type) {
    toast.success('Item added to cart', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  if (action.type === removeFromCart.type) {
    toast.error('Item removed from cart', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return next(action);
};

export default cartMiddleware;
