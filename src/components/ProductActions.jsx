import React from 'react';
import PropTypes from 'prop-types';

const ProductActions = ({ children }) => {
  return (
    <div>
      <div className="product-actions">
        <div>{ children }</div>
      </div>
    </div>
  );
};

ProductActions.propTypes = {
  children: PropTypes.node.isRequired
};

export default ProductActions;