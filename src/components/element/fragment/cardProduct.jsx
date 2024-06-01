/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/slices/cartSlice";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="flex justify-center flex-wrap">
      <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow-lg mx-2 flex flex-col justify-between my-2 hover:shadow-xl transition-shadow duration-300">
        {children}
      </div>
    </div>
  );
};

const Header = (props) => {
  const { image, id } = props;
  return (
    <Link to={`/detailproduct/${id}`}>
      <img src={image} alt="product" className="p-8 h-60 w-full rounded-t-lg object-cover" />
    </Link>
  );
};

const Body = (props) => {
  const { children, title } = props;
  return (
    <div className="px-5 pb-5 h-full">
      <Link to="">
        <h5 className="mb-3 text-xl font-semibold tracking-tight text-white">{title}</h5>
        <p className="text-sm text-gray-300">{children.substring(0, 50)}... <span className="text-purple-400">lihat selengkapnya</span></p>
      </Link>
    </div>
  );
};

const Footer = ({ price, id }) => {
  const dispatch = useDispatch();

  if (!price || !id) {
    throw new Error("Missing required props");
  }

  const handleAddClick = () => {
    dispatch(addToCart({ id, qty: 1 }));
  };

  return (
    <div className="flex items-center justify-between px-4 py-4">
      <span className="text-3xl font-bold text-white">
        {price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
      </span>
      <Button
        className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded"
        onClick={handleAddClick}
      >
        Add
      </Button>
    </div>
  );
};

const Notif = () => {
  // Komponen untuk menampilkan notifikasi
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
CardProduct.Notif = Notif;

export default CardProduct;
