/* eslint-disable react/prop-types */
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import TableCard from "../fragment/TableCard";
import NavbarLayout from "../layout/navbarLayout";
import PaymentModal from "./PaymentModal";
import {  removeFromCart, updateCartQuantity, selectCartItems } from "../../../redux/slices/cartSlice"; // Import your Redux actions and selectors

const DetailCart = ({ products }) => {
  const cart = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePayment = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const incrementQuantity = (id) => {
    const item = cart.find(product => product.id === id);
    dispatch(updateCartQuantity({ id, qty: item.qty + 1 }));
  };

  const decrementQuantity = (id) => {
    const item = cart.find(product => product.id === id);
    if (item.qty > 1) {
      dispatch(updateCartQuantity({ id, qty: item.qty - 1 }));
    } else {
      dispatch(removeFromCart(id));
    }
  };

  return (
    <div className="m-auto max-w-full  max-h-full overflow-auto relative bg-gray-950 flex flex-col">
      <NavbarLayout>
        <div className="m-auto max-w-full h-screen bg-gray-950 flex justify-center items-center">
          <TableCard
            products={products}
            cart={cart}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          />
        </div>
      </NavbarLayout>
      <div className="bottom-0 w-full bg-gray-800 p-4 flex justify-center">
        <button
          className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded"
          onClick={handlePayment}
        >
          Proceed to Payment
        </button>
      </div>
      {isModalOpen && <PaymentModal onClose={handleCloseModal} />}
    </div>
  );
};

export default DetailCart;
