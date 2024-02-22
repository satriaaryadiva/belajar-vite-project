import axios from "axios";


export const  Login= (data,callBack)=>{
    return axios
    .post('https://fakestoreapi.com/auth/login', data)
    .then(((res)=>{
        console.log(res.data );
        callBack(true, res.data.token)}

    ))
        .catch((error)=>callBack(false , error))

}
