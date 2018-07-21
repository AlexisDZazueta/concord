import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import { getProductBySku } from '../selectors/products';
import ProductEdit from '../components/ProductEdit';
import ProductData from '../components/ProductData';

class ProductContainer extends Component {
  renderBody = product => (
    <Route path="/products/:sku/edit" children={
      ({ match }) => {
        const ProductControl = match ? ProductEdit : ProductData;
        return <ProductControl { ...product } />
      }
    } />
  );

  render() {
    const { sku, product } = this.props;
    return (
      <div>
        <AppFrame 
          header={ `Producto ${sku}` }
          body={ this.renderBody(product) } />
      </div>
    );
  }
}

ProductContainer.propTypes = {
  sku: PropTypes.string.isRequired,
  product: PropTypes.object.isRequired
};

const mapStateToProps = (state, props) => ({
  product: getProductBySku(state, props)
})

export default connect(mapStateToProps, null)(ProductContainer); 