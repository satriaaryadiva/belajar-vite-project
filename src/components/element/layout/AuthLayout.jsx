/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const AuthLayout= ({ children, title, type }) => {


  
  return (
    <div   className=" flex   bg-black justify-center min-h-screen max-h-screen items-center p-5">
      <div className="   bg-purple-800 text-white p-5 rounded hover:shadow-cyan-400 shadow-lg transform hover:-translate-y-1 hover:scale-110 duration-300 border-t-8 hover:border-t-pink-400 hover:border-t-6 hover:border-r-8 drop-shadow-xl">
        <h1 className="text-3xl mb-2 font-bold text-blue-50 justify-center text-center">
          {title}
        </h1>
        <p className=" flex font-body  text-white my-4">
          welcome, please input your detail </p>
        {children}
        <div className= "mt-4 text-black text-center font-pixel">
          {type === 'login' ? ' dont have an account?  ' : 'already have an account? '}
          <Link
            to={type === 'login' ? ` /register` : ` /login`}
            className=" text-white font-bold font-pixel  capitalize"
          >
            {type === 'login' ? 'register' : 'login'}
          </Link>
        </div>
      </div>
    </div>
  );
};
  export default AuthLayout