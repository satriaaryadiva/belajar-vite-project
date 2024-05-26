/* eslint-disable react/prop-types */

import { useSelector } from "react-redux";
import TableCard from "../fragment/TableCard";
import NavbarLayout from "../layout/navbarLayout";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const DetailCart = ({ products }) => {
  const cart = useSelector(state => state.cart.data);

  return (
    <Fragment>
      <NavbarLayout/>
        <div className="min-h-screen bg-gray-950 flex justify-center items-center">
          <div className="w-full  max-w-lg p-4">
            <TableCard products={products} cart={cart} />
          </div>
        </div>
        
        <div className="  bottom-4 right-4 min-w-fitt bg-purple-500 p-4 rounded-lg shadow-lg">
          <Link to="/product ">
            <div className="text-white font-semibold">View more item </div>
          </Link>
        </div>
    </Fragment>
  );
};

export default DetailCart;
