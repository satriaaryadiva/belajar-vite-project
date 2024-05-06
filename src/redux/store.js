import { configureStore } from "@reduxjs/toolkit";  
import cartReducer from "./slices/cartSlice";

const  store=configureStore({
    reducer : {
        cart: cartReducer
    },
})
console.log( `oncreate :`,store.getState() );

store.subscribe(()=>{
    console.log( `onchange :`,store.getState() )})


export default  store