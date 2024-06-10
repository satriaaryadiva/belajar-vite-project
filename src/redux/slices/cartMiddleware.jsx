// cartMiddleware.js
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToCart, removeFromCart } from '../slices/cartSlice.js';

const cartMiddleware = ( ) => (next) => (action) => {
  if (action.type === addToCart.type) {
    toast.success('Hore Item sudah ditambahkan !!', {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      progressStyle:{color:' green'}
,      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme:'dark',
      style:{ border:'white 1px solid',
      borderRadius:'1rem',
          
      },
      
    });
  }

  if (action.type === removeFromCart.type) {
    toast.error('Item removed from cart', {
      position: "bottom-right",
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
