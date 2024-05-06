import {createSlice,configureStore} from '@reduxjs/toolkit';


const  cartSlice=(createSlice({
    name : 'cart',
    initialState : [],
    reducers : {
        addToCart : (state,action)=>{
            state.push(action.payload)
        }
    }
}))

const  loginSlice = createSlice({
    name : 'login',
    initialState : {
        status : false
    },
    reducers : {
        login : (state)=>{
            state.status = true
        }
    }
})


const store = configureStore({
    reducer :{
    login : loginSlice.reducer,
    cart : cartSlice.reducer,
}
})


console.log(store.getState() );

store.subscribe(()=>console.log('store Change',store.getState()));
store.dispatch(loginSlice.actions.login());
store.dispatch(cartSlice.actions.addToCart({
    id:2,
    qty:3
}));

