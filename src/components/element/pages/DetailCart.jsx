/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import TableCard from "../fragment/TableCard";
import NavbarLayout from "../layout/navbarLayout";
import {   useState } from "react";
import PaymentModal from "./PaymentModal";

const DetailCart = ({ products }) => {
  const cart = useSelector(state => state.cart.data);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePayment = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="m-auto max-w-full h-screen relative bg-gray-950 flex flex-col">
      <NavbarLayout>
        <div className="m-auto max-w-full h-screen bg-gray-950 flex justify-center items-center">
          <TableCard products={products} cart={cart} />
        </div>
      </NavbarLayout>
      <div className="fixed bottom-0 w-full bg-gray-800 p-4 flex justify-center">
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
