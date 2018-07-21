import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

const ProductEdit = ({ sku, model, description, price }) => {
  return (
    <div>
      <h2>Editar Producto</h2>
      <form action="">
        <div>
          <label htmlFor="sku">Sku: </label>
          <Field name="sku" component="input" type="text"></Field>
        </div>
        <div>
          <label htmlFor="model">Modelo: </label>
          <Field name="model" component="input" type="text"></Field>
        </div>
        <div>
          <label htmlFor="description">Descripción: </label>
          <Field name="description" component="input" type="text"></Field>
        </div>
        <div>
          <label htmlFor="price">Precio: </label>
          <Field name="price" component="input" type="number"></Field>
        </div>
      </form>
    </div>
  );
};

ProductEdit.propTypes = {
  sku: PropTypes.string,
  model: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number
};

const mapStateToProps = (state, props) => ({ initialValues: props })

export default connect(mapStateToProps)(reduxForm({ form: 'ProductEdit' })(ProductEdit));