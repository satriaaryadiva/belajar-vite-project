
import { Fragment } from "react";
import Button from "../Button/Button"
import useLogin from "../../../hooks/useLogin";
import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";


function NavbarLayout() {
const  username =useLogin();
  const handleLogout = e => {
    e.preventDefault();
   localStorage.removeItem('token');
    window.location.href = "/Login";
};

const  handleProfile= ()=> {

  window.location.href = "/profil";
}
  return (
    <Fragment>
    
   
                <div className="    fixed  z-50 flex w-full justify-end p-3 text-center bg-purple-800 text-white  ">
                  
                  <Button 
                 
                  className="flex-none w-40 items-center relative p-3 rounded font-semibold hover:bg-purple-950  border-s-black 
                  "
                  onSubmit={() => handleProfile} > <Link to="/profil">
                  <BsPersonCircle  className="absolute  w-8 inset-0  h-full"/> {username}</Link>
                  </Button>
                    <Button onClick={handleLogout} className="bg-black text-white ml-4" type="submit">Logout</Button>
                </div>

    </Fragment>
  
  )
}

export default NavbarLayout