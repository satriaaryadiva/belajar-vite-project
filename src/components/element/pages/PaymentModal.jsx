 

const PaymentModal = ({ onClose }) => {
  return (
    <div className=" fixed  inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md text-white">
        <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-2">Card Number</label>
            <input
              type="text"
              className="w-full p-2 rounded bg-gray-700 text-white"
              placeholder="1234 5678 9012 3456"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Expiry Date</label>
            <input
              type="text"
              className="w-full p-2 rounded bg-gray-700 text-white"
              placeholder="MM/YY"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">CVV</label>
            <input
              type="text"
              className="w-full p-2 rounded bg-gray-700 text-white"
              placeholder="123"
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded"
            >
              Pay Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentModal;
