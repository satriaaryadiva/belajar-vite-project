import { legacy_createStore } from "redux";

//reducdr
const reducer = (
  state ={
    cart : [],
  } , action) => {
    switch(action.type){
      case "ADD_TO_CART":return {
        ...state,
        cart : [...state.cart, action.payload]
      };
     default : return state}

  
}

//store
const store = legacy_createStore(reducer);
console.log(store.getState());

//subscribe
store.subscribe(() => console.log(store.getState()));

//dispatch
const action1 = {
  type : "ADD_TO_CART",
  payload : {
    id : 1,
    qty : 1
  }
}

store.dispatch(action1)

