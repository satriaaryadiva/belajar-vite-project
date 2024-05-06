import { configureStore ,createAction ,createReducer } from "@reduxjs/toolkit";


// membuat action
const  login =createAction(" CREATE_SESSION");

const  AddTocart = createAction("ADD_TO_CART");

const   cartReducer = createReducer([], (builder) => {
    builder.addCase(AddTocart,(state ,action)=>{
        state.push(action.payload) } )
})

const loginReducer = createReducer( { status : false }, (builder) => {
    builder.addCase(login, (state) => {
        state.status = true
    })
})


const store = configureStore({
    reducer : {login : loginReducer , cart : cartReducer}
})
console.log( `oncreate `,store.getState() )




store.subscribe(()=>console.log( `onchange `,store.getState() ))
store.dispatch(AddTocart({id : 1 , qty : 10}) )
store.dispatch( AddTocart({id : 1 , qty : 20}) )
store.dispatch( login() )