import React, { Component } from 'react';
import ItemList from '../Containers/ItemList';
import Cart from '../Containers/Cart';

import { Switch, Route, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <ItemList />} />
        <Route exact path="/cart" render={() => <Cart />} />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default App;
