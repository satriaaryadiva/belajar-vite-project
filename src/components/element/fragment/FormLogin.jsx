// src/components/FormLogin.js

import InputForm from "../input";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { loginUser } from "../../../redux/slices/authSlice";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);

  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      username: e.target.email.value,
      password: e.target.password.value,
    };
    dispatch(loginUser(data)).unwrap()
      .then(() => {
        window.location.href = '/product';
      })
      .catch((error) => {
        setLoginFailed("Wrong ID or Password !!!");
      });
  };

  return (
    <>
      <div className="flex justify-center">
        {loginFailed && <p className="text-red-500 border-2 border-rose-500">{loginFailed}</p>}
      </div>
      <form onSubmit={handleLogin}>
        <InputForm
          label='Username'
          type='text'
          placeholder='example@gmail.com '
          name='email'
        />
        <InputForm
          id='password'
          label='Password'
          type='password'
          placeholder='******'
          name='password'
        />
        <Button className="bg-blue-600 w-full animate-pulse" type="submit">
          Login
        </Button>
      </form>
    </>
  );
};

export default FormLogin;
