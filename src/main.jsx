import React from 'react'
import ReactDOM from 'react-dom/client'
import Product from './components/element/pages/product.jsx'
import './index.css'
import './App.css'
import ErrorPage from './components/element/pages/eror.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './components/element/pages/login.jsx';
import RegisterPage from './components/element/pages/Register.jsx';
import ProfilPage from './components/element/pages/profil.jsx';

const  router =createBrowserRouter([
  {
  path:'/product',
  element:<Product/>,
  errorElement:<ErrorPage/>
  },
{
path:'',
element:<LoginPage/>,
errorElement:<ErrorPage/>
}  
  ,
{
path:'/login',
element: <LoginPage></LoginPage>
},
{
path:'/register',
element:<RegisterPage/>,
errorElement:<ErrorPage/>
},{
  path:'/profil',
  element:<ProfilPage/>,
  errorElement:<ErrorPage/>
}])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
