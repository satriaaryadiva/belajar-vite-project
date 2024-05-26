// src/services/auth.service.js

import axios from "axios";

export const Login = async (data, callBack) => {
  try {
    const res = await axios.post('https://fakestoreapi.com/auth/login', data);
    callBack(true, res.data.token);
  } catch (error) {
    callBack(false, error);
  }
};
