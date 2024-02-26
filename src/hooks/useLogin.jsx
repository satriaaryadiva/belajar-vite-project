import { useEffect, useState } from "react";
import { getusername } from "../components/services/decode.service";

 const  useLogin=()=>{    
    const  [username,setUsername]=useState('');
   useEffect(() => {
    const  token =localStorage.getItem('token');
       if(token){
           setUsername(getusername(token));
       }else{
        window.location.href='/login';
    }
   },[])
   return username
    
}
export default useLogin