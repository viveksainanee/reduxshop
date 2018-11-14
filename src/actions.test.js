import { addItem, removeItem } from './actions';
import Item from './Components/Item';

let state;

describe('addItem', function() {
  it('should it correctly return an action', function() {
    let newState = addItem({
      id: 4,
      name: 'chair',
      price: 100.89,
      image_url: 'https://www.ikea.com/PIAimages/0355482_PE547815_S5.JPG'
    });
    expect(newState).toEqual({
      type: 'ADD_ITEM',
      payload: {
        id: 4,
        name: 'chair',
        price: 100.89,
        image_url: 'https://www.ikea.com/PIAimages/0355482_PE547815_S5.JPG'
      }
    });
  });
});

describe('removeItem', function() {
  it('should it correctly return an action', function() {
    let newState = removeItem(4);
    expect(newState).toEqual({
      type: 'REMOVE_ITEM',
      id: 4
    });
  });
});
