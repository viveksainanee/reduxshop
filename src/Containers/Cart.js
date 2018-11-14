import React, { Component } from 'react';
import CartLine from '../Components/CartLineItem';
import { updateQuantity } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

class Cart extends Component {
  constructor(props) {
    super(props);

    this.incrementQty = this.incrementQty.bind(this);
    this.decrementQty = this.decrementQty.bind(this);
  }

  incrementQty(id) {
    this.props.updateQuantity(id, 1);
  }

  decrementQty(id) {
    this.props.updateQuantity(id, -1);
  }

  render() {
    return (
      <div>
        <h1> Cart</h1>
        {this.props.cart.map(item => (
          <CartLine
            item={item}
            incrementQty={this.incrementQty}
            decrementQty={this.decrementQty}
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

          <Link to="/">
            <Button color="primary"> Checkout </Button>{' '}
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { cart: state.cart };
}

export default connect(
  mapStateToProps,
  { updateQuantity }
)(Cart);
