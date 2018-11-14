import rootReducer from './rootReducer';
let state;

beforeEach(function() {
  //Set up initial state before each test
  state = {
    cart: [
      {
        id: 1,
        name: 'tv',
        price: 219.99,
        image_url:
          'https://images.samsung.com/is/image/samsung/latin_en-hd-j4300ah-un32j4300ahxpa-001-front-indigo-blue'
      },
      {
        id: 2,
        name: 'microwave',
        price: 100.0,
        image_url:
          'https://target.scene7.com/is/image/Target/GUEST_c59b9457-3ee1-463b-ad0a-42f48d06c140'
      },
      {
        id: 3,
        name: 'toaster oven',
        price: 20.49,
        image_url:
          'https://images-na.ssl-images-amazon.com/images/I/81110bb7g2L._SL1500_.jpg'
      }
    ]
  };
});

afterEach(function() {
  //confirm that the state has not mutated
  expect(state).toEqual({
    cart: [
      {
        id: 1,
        name: 'tv',
        price: 219.99,
        image_url:
          'https://images.samsung.com/is/image/samsung/latin_en-hd-j4300ah-un32j4300ahxpa-001-front-indigo-blue'
      },
      {
        id: 2,
        name: 'microwave',
        price: 100.0,
        image_url:
          'https://target.scene7.com/is/image/Target/GUEST_c59b9457-3ee1-463b-ad0a-42f48d06c140'
      },
      {
        id: 3,
        name: 'toaster oven',
        price: 20.49,
        image_url:
          'https://images-na.ssl-images-amazon.com/images/I/81110bb7g2L._SL1500_.jpg'
      }
    ]
  });
});

describe('rootReducer', function() {
  it('should correctly add a item to the cart', function() {
    let newState = rootReducer(state, {
      type: 'ADD_ITEM',
      payload: {
        id: 4,
        name: 'chair',
        price: 100.89,
        image_url: 'https://www.ikea.com/PIAimages/0355482_PE547815_S5.JPG'
      }
    });
    expect(newState).toEqual({
      cart: [
        {
          id: 1,
          name: 'tv',
          price: 219.99,
          image_url:
            'https://images.samsung.com/is/image/samsung/latin_en-hd-j4300ah-un32j4300ahxpa-001-front-indigo-blue'
        },
        {
          id: 2,
          name: 'microwave',
          price: 100.0,
          image_url:
            'https://target.scene7.com/is/image/Target/GUEST_c59b9457-3ee1-463b-ad0a-42f48d06c140'
        },
        {
          id: 3,
          name: 'toaster oven',
          price: 20.49,
          image_url:
            'https://images-na.ssl-images-amazon.com/images/I/81110bb7g2L._SL1500_.jpg'
        },
        {
          id: 4,
          name: 'chair',
          price: 100.89,
          image_url: 'https://www.ikea.com/PIAimages/0355482_PE547815_S5.JPG'
        }
      ]
    });
  });

  it('should correctly remove an item from the cart', function() {
    let newState = rootReducer(state, {
      type: 'REMOVE_ITEM',
      id: 3
    });
    expect(newState).toEqual({
      cart: [
        {
          id: 1,
          name: 'tv',
          price: 219.99,
          image_url:
            'https://images.samsung.com/is/image/samsung/latin_en-hd-j4300ah-un32j4300ahxpa-001-front-indigo-blue'
        },
        {
          id: 2,
          name: 'microwave',
          price: 100.0,
          image_url:
            'https://target.scene7.com/is/image/Target/GUEST_c59b9457-3ee1-463b-ad0a-42f48d06c140'
        }
      ]
    });
  });
});
