
import { Fragment } from "react";
import Button from "../Button/Button"
import useLogin from "../../../hooks/useLogin";

function NavbarLayout() {
const  username =useLogin();
  const handleLogout = e => {
    e.preventDefault();
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    window.location.href = "/Login";
};
  return (
    <Fragment>
    
   
                <div className="nav  flex w-full justify-end p-3 text-center bg-purple-800 text-white">
                        <b className="pt-2">{username}</b>
                    <Button onClick={handleLogout} className="bg-black text-white ml-4" type="submit">Logout</Button>
                </div>

    </Fragment>
  
  )
}

export default NavbarLayout