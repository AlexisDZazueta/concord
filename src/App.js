import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import ProductContainer from './containers/ProductContainer';
import './App.css';

class App extends Component {
  
  renderProductContainer = () => <h1>ProductContainer</h1>;
  renderProductListContainer = () => <h1>ProductListContainer</h1>;
  renderProductNewContainer = () => <h1>ProductNewContainer</h1>;

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={ HomeContainer } />
          <Route exact path="/products" component={ ProductContainer } />
          <Switch>
            <Route path="/products/new" component={ this.renderProductNewContainer } />
            <Route path="/products/:sku" component={ this.renderProductContainer } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
