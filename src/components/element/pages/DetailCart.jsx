/* eslint-disable react/prop-types */

import { useSelector } from "react-redux";
import TableCard from "../fragment/TableCard";
import NavbarLayout from "../layout/navbarLayout";
import { Fragment } from "react";

const DetailCart = ({ products  }) => {
    const cart = useSelector(state => state.cart.data)  ;

    return (
        <Fragment> 
        <NavbarLayout>
            <div className="z-100 m-auto top-0   max-w-fit h-screen bg-purple-400 flex justify-center items-center">
                <TableCard products={products} cart={cart} />
            </div>
        </NavbarLayout>
        </Fragment>
    );
}

export default DetailCart;
