/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Fragment, useState, useEffect } from "react";
import Button from "../Button/Button";
import useLogin from "../../../hooks/useLogin";
import { BsPersonCircle, BsDoorOpen, BsCart3 } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import LogoutConfirmation from "../fragment/LogoutConfirmation";

function NavbarLayout({ children }) {
  const username = useLogin();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const cart = useSelector(state => state.cart.data);
  const [totalCart, setTotalCart] = useState(0);
  const location = useLocation();

  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    const sum = cart.reduce((acc, item) => acc + item.qty, 0);
    setTotalCart(sum);
  }, [cart]);

  const handleLogout = () => {
    setShowConfirmation(true);
  };

  const confirmLogout = () => {
    localStorage.removeItem('token');
    window.location.href = "/login";
  };

  const cancelLogout = () => {
    setShowConfirmation(false);
  };

  return (
    <Fragment>
      {showConfirmation && (
        <LogoutConfirmation onConfirm={confirmLogout} onCancel={cancelLogout} />
      )}
      <div className={`    fixed z-50 top-0 w-full bg-purple-800 text-white transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="flex items-center space-x-4">
            <Link to="/profil" className="flex items-center">
              <BsPersonCircle className="text-2xl mr-2" />
              <span className="text-lg font-semibold">{username}</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to={location.pathname === "/product/cart" ? "/product" : "/product/cart"} className="relative flex items-center">
              <BsCart3 className="text-2xl" />
              {totalCart > 0 && (
                <span className="absolute top-0 right-0 bg-red-600 rounded-full text-white text-xs w-5 h-5 flex items-center justify-center">
                  {totalCart}
                </span>
              )}
            </Link>
            <Button onClick={handleLogout} className="bg-black text-white p-2 rounded hover:bg-red-700 transition duration-300">
              <BsDoorOpen className="text-2xl" />
            </Button>
          </div>
        </div>
      </div>
      <div className="pt-16">
        {children}
      </div>
    </Fragment>
  );
}

export default NavbarLayout;
