/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const AuthLayout= ({ children, title, type }) => {
  return (
    <div className="font-sans flex bg-black justify-center min-h-screen max-h-screen items-center">
      <div className=" bg-purple-800 text-white p-5 rounded">
        <h1 className="text-3xl mb-2 font-bold text-blue-50 justify-center text-center">
          {title}
        </h1>
        <p className="font-medium text-white my-4">
          welcome, please input your detail {""}</p>
        {children}
        <div className="text-black text-center">
          {type === 'login' ? ' "" dont have an account?' : 'already have an account? '}
          <Link
            to={type === 'login' ? '/register' : '/login'}
            className="underline font-bold text-blue-800 capitalize"
          >
            {type === 'login' ? 'register' : 'login'}
          </Link>
        </div>
      </div>
    </div>
  );
};
  export default AuthLayout