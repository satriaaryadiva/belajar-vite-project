import { legacy_createStore } from "redux";
// reducer 
const  cartReducer =(
  state = {
    cart: [{id:10, qty: 2}],
  },
  action  
  )=>{
    switch(action.type){
        case 'ADD_TO_CART':{
          return{
        ...state,
        cart :[...state.cart, action.payload],
        };
  
      }    default: return state}
    }



///store
const  store = legacy_createStore(cartReducer);
console.log(store.getState());




//subcribe
store.subscribe(() => {
  console.log('store changed', store.getState());
})


//dispatch
const  action1= {
  type: 'ADD_TO_CART',
  payload: {
    id:3,
    qty: 2
  }}


  store.dispatch(action1)