import React from 'react';
import PropTypes from 'prop-types';

const ProductEdit = ({ sku, model, description, price }) => {
  return (
    <div>
      <h2>Editar Producto</h2>
      <h3>{`SKU: ${sku} / Modelo: ${model} / Descripción: ${description} / Precio: ${price}`}</h3>
    </div>
  );
};

ProductEdit.propTypes = {
  sku: PropTypes.string,
  model: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number
};

export default ProductEdit;