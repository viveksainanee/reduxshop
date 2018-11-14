import React, { Component } from 'react';
import data from '../db.json';
import { connect } from 'react-redux';
import { addItem, removeItem } from '../actions';
import { Link } from 'react-router-dom';
import Item from '../Components/Item';
import './ItemList.css';
import { Button } from 'reactstrap';

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
  }

  // Dispatcher to add an item to Redux state
  add(payload) {
    payload.qty = 1;
    this.props.addItem(payload);
  }

  // Dispatcher to remove an item from Redux state
  remove(id) {
    this.props.removeItem(id);
  }

  render() {
    return (
      //Item Component
      <div>
        {data.items.map(item => (
          <Item
            item={item}
            add={this.add}
            remove={this.remove}
            key={item.id}
            isInCart={this.props.cart.includes(item)}
          />
        ))}
        <div id="ItemList-footer">
          <b>
            $
            {this.props.cart.reduce(
              (acc, item) => acc + item.price * item.qty,
              0
            )}{' '}
          </b>

          <Link to="/cart">
            <Button color="primary"> Go to Cart </Button>{' '}
          </Link>
        </div>
      </div>
    );
  }
}

// Add the props to the item list component
function mapStateToProps(state) {
  return {
    cart: state.cart
    // numItems: state.cart.length,
  };
}

export default connect(
  mapStateToProps,
  { addItem, removeItem }
)(ItemList);
