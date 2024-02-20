import axios from "axios";


export const  getProducts= (callBack)=>{
    return axios.get('https://fakestoreapi.com/pr').then((res=>{callBack(res.data)})).catch((err)=>{console.log(err)});

    
}