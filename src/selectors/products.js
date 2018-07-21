import { createSelector } from 'reselect';

export const getProducts = state => state.products;

export const getProductBySku = createSelector(
  (state, props) => state.products.find( value => value.sku === props.sku ),
  product => product
);