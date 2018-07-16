import React from 'react';
import PropTypes from 'prop-types';

const ProductData = ({ sku, model, description, price }) => {
  return (
    <div>
      <div className="product-data">
        <h2>Productos</h2>
        <div><strong>SKU</strong><i>{ sku }</i></div>
        <div><strong>Modelo</strong><i>{ model }</i></div>
        <div><strong>Descripción</strong><i>{ description }</i></div>
        <div><strong>Precio</strong><i>{ `$${price}` }</i></div>
      </div>
    </div> 
  );
};

ProductData.propTypes = {
  sku: PropTypes.string.isRequired,
  nodel: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

export default ProductData;