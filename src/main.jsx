import React from 'react'
import DarkModeContextProvider from './context/Darkmode.jsx'
import ReactDOM from 'react-dom/client'
import Product from './components/element/pages/product.jsx'
import './index.css'
import CartDetail from './components/element/fragment/CartDetail.jsx'
import ErrorPage from './components/element/pages/eror.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './components/element/pages/login.jsx';
import RegisterPage from './components/element/pages/Register.jsx';
import ProfilPage from './components/element/pages/profil.jsx';
import DetailProduct from './components/element/pages/detailproduct.jsx'
import { Provider } from 'react-redux'
import store from './redux/store'

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
},{
path:'/detailproduct/:id',
element:<DetailProduct/>

},
{
path:'/test',
element:<CartDetail/>

}

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<Provider store={store}>
 <DarkModeContextProvider>
<RouterProvider router={router}/>
</DarkModeContextProvider>
</Provider>

  
  </React.StrictMode>,
)
