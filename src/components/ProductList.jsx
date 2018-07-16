import React from 'react';
import PropTypes from 'prop-types';
import ProductListItem from './ProductListItem';

const ProductList = ({ products, baseUrl }) => {
  return (
    <div>
      <div className="product-list">
        { 
          products.map(item => 
            <ProductListItem 
              key={ item.sku }
              sku={ item.sku }
              model={ item.model }
              editAction={ 'Editar' }
              deleteAction={ 'Eliminar' }
              baseUrl={ baseUrl } />
          )
        }
      </div>
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  baseUrl: PropTypes.string.isRequired
};

export default ProductList;