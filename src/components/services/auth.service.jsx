import axios from "axios";


export const  Login= (data,callBack)=>{
    return axios
    .post('https://fakestoreapi.com/auth/login', data)
    .then(((res)=>{callBack(true, res.token)}))
        .catch((error)=>callBack(false , error))

}