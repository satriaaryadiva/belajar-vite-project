import { jwtDecode } from "jwt-decode";
 

export  const  getusername=(token)=>{
    const decoded = jwtDecode(token);
    return decoded.user;
}



