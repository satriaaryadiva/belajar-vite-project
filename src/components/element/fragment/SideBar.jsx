/* eslint-disable react/prop-types */
 
import Button from "../Button/Button";
import { BsPersonCircle, BsDoorOpen, BsCart3, BsX } from "react-icons/bs";
import { Link } from "react-router-dom";
 

const Sidebar = ({ username, totalCart, handleLogout, toggleSidebar ,sidebarOpen }) => {
 

  return (
    <div className={`fixed inset-y-0 left-0 z-40 w-64 bg-purple-800 text-white transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out sm:hidden`}>
      <div className="relative h-full flex flex-col p-4 space-y-4">
        <Button onClick={toggleSidebar} className="absolute right-0 top-1/2 transform -translate-y-1/2">
          <BsX className="text-4xl bg-black border-black p-1 rounded-lg" />
        </Button>
        <Link to="/profil">
          <Button onClick={toggleSidebar} className="w-full flex items-center p-3 rounded font-semibold bg-purple-700 hover:bg-purple-950">
            <BsPersonCircle className="mr-2" /> {username}
          </Button>
        </Link>
        <Link to="/product">
          <Button onClick={toggleSidebar} className="w-full flex items-center p-3 rounded font-semibold bg-purple-700 hover:bg-purple-950">
            Produk
          </Button>
        </Link>
        <Link to="/product/cart">
          <Button onClick={toggleSidebar} className="w-full flex items-center p-3 rounded font-semibold bg-purple-700 hover:bg-purple-950">
            <BsCart3 className="mr-2" />
            Cart
            {totalCart > 0 && (
              <span className="ml-2 bg-red-600 rounded-full text-white text-xs w-5 h-5 flex items-center justify-center">
                  {totalCart}
              </span>
              
            ) } 
          </Button>
        </Link>
        <Button onClick={() => { handleLogout(); toggleSidebar(); }} className="w-full flex items-center p-3 rounded font-semibold bg-black text-white hover:bg-gray-800">
          <BsDoorOpen className=" mr-2" /> Logout
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
