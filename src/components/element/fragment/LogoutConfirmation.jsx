/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// components/common/LogoutConfirmation.jsx
 
import Button from '../Button/Button';

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

export default LogoutConfirmation;
