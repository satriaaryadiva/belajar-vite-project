
// main.jsx or index.jsx
import Banner from './components/element/fragment/Banner.jsx';
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
import ProtectedRoute from './components/ProtectedRoute';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/product',
    element: (
      <ProtectedRoute>
        <Product />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />
  },
  {
    path: '/',
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
    element: (
      <ProtectedRoute>
        <ProfilPage />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />
  },
  {
    path: '/detailproduct/:id',
    element: (
      <ProtectedRoute>
        <DetailProduct />
      </ProtectedRoute>
    )
  },
  {
    path: '/product/cart',
    element: (
      <ProtectedRoute>
        <DetailCart />
      </ProtectedRoute>
    )
  },{
    path: 'test',
    element: <Banner />
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
  </React.StrictMode>
);
