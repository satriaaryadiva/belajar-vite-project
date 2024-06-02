/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/slices/cartSlice";

const CardProduct = ({ children }) => {
  return (
    <div className="flex justify-center flex-wrap">
      <div className="w-full max-w-sm bg-slate-950 border border-gray-700 rounded-lg shadow-lg mx-2 flex flex-col justify-between my-4 transition-transform transform hover:scale-105 hover:shadow-2xl">
        {children}
      </div>
    </div>
  );
};

const Header = ({ image, id }) => {
  return (
    <Link to={`/detailproduct/${id}`}>
      <img src={image} alt="product" className="p-4 h-48 w-full object-cover rounded-t-lg transition-transform duration-300 ease-in-out transform hover:scale-105" />
    </Link>
  );
};

const Body = ({ children, title,id }) => {
  return (
    <Link to={`/detailproduct/${id}`}>
    <div className="px-5 pb-5 flex-grow">
      
        <h5 className="text-xl font-semibold tracking-tight text-white mb-2">{title}</h5>
        <p className="text-white">
          {children.substring(0, 50)}... <span className="text-blue-500">lihat selengkapnya</span>
        </p>
        </div>
      </Link>
    
  );
};

const Footer = ({ price, id, handleAddToCart }) => {
  const dispatch = useDispatch();

  if (!price || !id) {
    throw new Error("Missing required props");
  }

  const handleAddClick = () => {
    dispatch(addToCart({ id, qty: 1 }));
    if (handleAddToCart) {
      handleAddToCart();
    }
  };

  return (
    <div className="flex items-center justify-between px-5 py-3 bg-gray-900 rounded-b-lg">
      <span className="text-xl font-bold text-white">
        {price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
      </span>
      <Button
        className=" bg-purple-700 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-2xl"
        onClick={handleAddClick}
      >
        Add
      </Button>
    </div>
  );
};

const Notif = () => {
  // Component for displaying notifications
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
CardProduct.Notif = Notif;

export default CardProduct;
