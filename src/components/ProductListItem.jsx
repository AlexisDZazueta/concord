import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProductListItem = ({ baseUrl, sku, model, editAction, deleteAction }) => {
  return (
    <div>
      <div className="product-list-item">
        <div className="field">
          <Link to={ `${baseUrl}${sku}` }>{ model }</Link>
        </div>
        <div className="field">
          <Link to={ `${baseUrl}${sku}/edit` }>{ editAction }</Link>
        </div>
        <div className="field">
          <Link to={ `${baseUrl}${sku}/delete` }>{ deleteAction }</Link>
        </div>
      </div>
    </div>
  );
};

ProductListItem.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  sku: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  editAction: PropTypes.string.isRequired,
  deleteAction: PropTypes.string.isRequired
};

export default ProductListItem;