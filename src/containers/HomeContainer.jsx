import React, { Component } from 'react';
import AppFrame from '../components/AppFrame';
import ProductActions from '../components/ProductActions';

class HomeContainer extends Component {

  handleOnClick = () => {
    console.log('Handle On Click');
    this.props.history.push('products');
  }

  render() {
    return (
      <div>
        <AppFrame 
          header='Home'
          body={
            <div>
              Esta es la pantalla inicial
              <ProductActions>
                <button onClick={ this.handleOnClick }>Listado de Productos</button>
              </ProductActions>
            </div>
          } />
      </div>
    );
  }
}

export default HomeContainer; 