import React, { Component } from 'react';

class CartLineItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>{this.props.item.name}</p>
        <p>{this.props.item.price}</p>
        <p>{this.props.item.qty}</p>
        <button onClick={() => this.props.incrementQty(this.props.item.id)}>
          +
        </button>
        <button onClick={() => this.props.decrementQty(this.props.item.id)}>
          -
        </button>
      </div>
    );
  }
}

export default CartLineItem;
