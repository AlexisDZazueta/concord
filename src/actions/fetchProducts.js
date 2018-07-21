import { FETCH_PRODUCTS } from '../constants/';
import { createAction } from 'redux-actions';
import { apiGetProducts } from '../api/';
import { urlGetProducts } from '../api/urls';

export const fetchProducts = createAction(FETCH_PRODUCTS, apiGetProducts(urlGetProducts));
