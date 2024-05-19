/* eslint-disable react/prop-types */
import  { Fragment, useState, useEffect } from "react";
import Button from "../Button/Button";
import useLogin from "../../../hooks/useLogin";
import { BsPersonCircle, BsDoorOpen, BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const LogoutConfirmation = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed z-50 top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-lg font-semibold mb-4">Apakah Anda yakin ingin logout?</p>
        <div className="flex justify-end">
          <Button onClick={onCancel} className="bg-green-600 hover:bg-gray-400 text-gray-800 mr-2">
            Ga jadi deh
          </Button>
          <Button onClick={onConfirm} className="bg-red-500 hover:bg-red-600 text-white">
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

function NavbarLayout({ children }) {
  const username = useLogin();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const handleLogout = () => {
    setShowConfirmation(true);
  };

  const confirmLogout = () => {
    localStorage.removeItem('token');
    window.location.href = "/Login";
  };

  const cancelLogout = () => {
    setShowConfirmation(false);
  };

  const cart = useSelector(state => state.cart.data)  ;
  const [totalCart, setTotalCart] = useState(0);

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);

  return (
    <Fragment>
      {showConfirmation && (
        <LogoutConfirmation onConfirm={confirmLogout} onCancel={cancelLogout} />
      )}
      <div className="h z-50 fixed sm:top-0 flex w-full justify-end p-3 text-center bg-purple-800 text-white">
        <Link to="/profil">
          <Button className="flex-none w-40 items-center relative p-3 rounded font-semibold hover:bg-purple-950 border-s-black">
            <BsPersonCircle className="absolute w-8 inset-0 h-full" /> {username}
          </Button>
        </Link>

        <Link to ='/product/cart'> 
        <Button className="bg-black text-white ml-4">
          <p className="text-white flex flex-row justify-between">{totalCart} <BsCart3 /></p>
        </Button>
        </Link>

        <Button onClick={handleLogout} className="bg-black text-white ml-4" type="button">
          <BsDoorOpen className="text-2xl text-white hover:text-red-500" />
        </Button>
      </div>
      {children}
    </Fragment>
  );
}

export default NavbarLayout;
