// components/layout/NavbarLayout.jsx


/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


import  { Fragment, useState, useEffect } from "react";
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
      <div className={`fixed z-50 top-0 w-full bg-purple-800 text-white transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex justify-end p-3">
          <Link to="/profil">
            <Button className="flex-none w-40 items-center relative p-3 rounded font-semibold hover:bg-purple-950 border-s-black text-lg">
              <BsPersonCircle className="absolute w-8 inset-0 h-full" /> {username}
            </Button>
          </Link>
          <Link to={location.pathname === "/product/cart" ? "/product" : "/product/cart"}>
            <Button className="flex-none w-fit items-center relative p-3 rounded font-semibold hover:bg-purple-950 border-s-black">
              <BsCart3 className="absolute w-8 inset-0 h-full" />
              {totalCart > 0 && (
                <span className="absolute top-0 right-0 bg-red-600 rounded-full text-white text-xs w-5 h-5 flex items-center justify-center">
                  {totalCart}
                </span>
              )}
            </Button>
          </Link>
          <Button onClick={handleLogout} className="bg-black text-white ml-4" type="button">
            <BsDoorOpen className="text-2xl text-white hover:text-red-500" />
          </Button>
        </div>
      </div>
      {children}
    </Fragment>
  );
}

export default NavbarLayout;
