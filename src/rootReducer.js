import { ADD_ITEM, REMOVE_ITEM } from './actionTypes';

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

    default:
      return state;
  }
}

export default rootReducer;
