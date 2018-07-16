import { handleActions } from 'redux-actions';
import { FETCH_PRODUCTS } from '../constants';

export const products = handleActions({
  [FETCH_PRODUCTS]: (state, action) => [...action.payload]
}, []);
