import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AppFrame from '../components/AppFrame';
import ProductList from '../components/ProductList';
import ProductActions from '../components/ProductActions';
import { fetchProducts } from '../actions/fetchProducts';
import { getProducts } from '../selectors/products';

class ProductContainer extends Component {
  
  componentDidMount() {
    this.props.fetchProducts();
  }

  handleAddNew = () => {
    this.props.history.push('products/new');
  }

  renderBody = products => (
    <div>
      <ProductList 
        products={ products } 
        baseUrl={ 'products/' } />
      <ProductActions>
        <button onClick={ this.handleAddNew }>Nuevo Producto</button>
      </ProductActions>
    </div>
  )

  render() {
    return (
      <div>
        <AppFrame 
          header='Listado de clientes'
          body={ this.renderBody(this.props.products) } />
      </div>
    );
  }
}

ProductContainer.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired
};

ProductContainer.defaultProps = {
  products: []
} 

const mapDispatchToProps = { fetchProducts };

const mapStateToProps = state => ({
  products: getProducts(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);