import { ADD_ITEM, REMOVE_ITEM } from './actionTypes';

export function addItem(payload) {
  //returns action for add item
  return {
    type: ADD_ITEM,
    payload
  };
}

export function removeItem(id) {
  //returns action for remove item

  return {
    type: REMOVE_ITEM,
    id
  };
}
