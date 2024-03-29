/* eslint-disable no-unused-vars */
import {getProfile} from "../../services/user.service"
import { useEffect, useState } from "react";


/* eslint-disable react/prop-types */
const Card = (props)=>{
  const [Profile, setProfile] = useState({});

    useEffect(() => {
        getProfile(1, (data) => setProfile(data)); // Anda perlu memberikan ID pengguna sebagai argumen
    }, []);


    const  {className, badge,children}=props;
    return(
 
<article  
  className ={className}
>
  <div className="rounded-[10px]  bg-yellow-100 p-4 !pt-10 sm:p-6">

  <h1 className=" rounded bg-blue-500 font-extrabold   text-center p-1 text-xl "><b> Account information</b></h1>
   {Object.keys(Profile).length > 0 && Profile && (
    <div className="mt-4  flex-wrap gap-1 items-center">
      <img className="rounded-full m-auto" src="https://via.placeholder.com/150" alt="" />
      <p>Username  : {Profile.username}</p>
      <p>fullName : {Profile.name.firstName}, {Profile.name.lastName}</p>
      <p>ID : {Profile.id}</p>
      <p> Email  : {Profile.email}</p>
      <p>Phone : {Profile.phone}</p>
      <p>Address : {Profile.address.street}</p>
     
    </div>
   )}
  </div>
</article>
        
        )
}

export default Card