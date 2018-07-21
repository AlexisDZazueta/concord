import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import ProductsContainer from './containers/ProductsContainer';
import ProductContainer from './containers/ProductContainer';
import './App.css';

class App extends Component {
  
  renderProductNewContainer = () => <h1>ProductNewContainer</h1>;

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={ HomeContainer } />
          <Route exact path="/products" component={ ProductsContainer } />
          <Switch>
            <Route path="/products/new" component={ this.renderProductNewContainer } />
            <Route path="/products/:sku" 
              render={ props => <ProductContainer sku={ props.match.params.sku } /> } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
