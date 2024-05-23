// main.jsx atau index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DarkModeContextProvider from './context/Darkmode.jsx';
import store from './redux/store';
import Product from './components/element/pages/product.jsx';
import ErrorPage from './components/element/pages/eror.jsx';
import LoginPage from './components/element/pages/login.jsx';
import RegisterPage from './components/element/pages/Register.jsx';
import ProfilPage from './components/element/pages/profil.jsx';
import DetailProduct from './components/element/pages/detailproduct.jsx';
import DetailCart from './components/element/pages/DetailCart.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/product',
    element: <Product />,
    errorElement: <ErrorPage />
  },
  {
    path: '',
    element: <LoginPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/register',
    element: <RegisterPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/profil',
    element: <ProfilPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/detailproduct/:id',
    element: <DetailProduct />
  },
  {
    path: '/product/cart',
    element: <DetailCart />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <DarkModeContextProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </DarkModeContextProvider>
    </Provider>
  </React.StrictMode>,
);
