import axios from "axios";


export const  getProducts= (callBack)=>{
    return axios.get('https://fakestoreapi.com/products').then((res=>{callBack(res.data)})).catch((err)=>{console.log(err)});

    
}


export const  getDetailProduct= (id,callBack)=>{
    return axios.get(`https://fakestoreapi.com/products/${id}`).then((res=>{callBack(res.data)})).catch((err)=>{console.log(err)});

    
}