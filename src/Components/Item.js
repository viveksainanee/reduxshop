import React, { Component } from 'react';
import './Item.css';
import { Button, Card, CardBody, CardImg, CardTitle } from 'reactstrap';

class Item extends Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleAdd(evt) {
    // Calls a dispatcher handled in the item list
    this.props.add(this.props.item);
  }

  handleRemove(evt) {
    // Calls a dispatcher handled in the item list
    this.props.remove(this.props.item.id);
  }

  render() {
    return (
      <Card id="Item" className="">
        <CardBody>
          <CardImg id="Item-image" src={this.props.item.image_url} />
          <CardTitle> {this.props.item.name}</CardTitle>
          <p> ${this.props.item.price}</p>

          {/* If its in the cart, show a remove button */}
          {!this.props.isInCart ? (
            <Button color="primary" onClick={this.handleAdd}>
              Add To Cart
            </Button>
          ) : (
            <Button color="danger" onClick={this.handleRemove}>
              Remove From Cart
            </Button>
          )}
        </CardBody>
      </Card>
    );
  }
}

export default Item;
