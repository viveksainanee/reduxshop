import { ADD_ITEM, REMOVE_ITEM, UPDATE_QTY } from './actionTypes';

const INITIAL_STATE = {
  cart: []
};

function rootReducer(state = INITIAL_STATE, action) {
  //if action is add item, add it to the cart in Redux store

  switch (action.type) {
    case ADD_ITEM:
      return {
        cart: [...state.cart, action.payload]
      };

    //if action is remove item, remove it from the cart in Redux store

    case REMOVE_ITEM:
      return {
        cart: state.cart.filter(item => item.id !== action.id)
      };

    //if action is update quantity, update it

    case UPDATE_QTY:
      let idx = state.cart.findIndex(item => item.id === action.id);
      let item = { ...state.cart[idx] };
      item.qty += action.qtyChanged;

      return {
        cart: [...state.cart.slice(0, idx), item, ...state.cart.slice(idx + 1)]
      };

    default:
      return state;
  }
}

export default rootReducer;
