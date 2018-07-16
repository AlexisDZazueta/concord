import { FETCH_PRODUCTS } from '../constants/';
import { createAction } from 'redux-actions';

const products = [
  {
    "sku": "S170XR",
    "model": "S170XR",
    "description": "Zapato de futbol para caballero",
    "price": 749.00
  },
  {
    "sku": "S162BJ",
    "model": "S162BJ",
    "description": "Zapato de futbol para caballero",
    "price": 555.00
  },
  {
    "sku": "S160XA",
    "model": "S160XA",
    "description": "Zapato de futbol para caballero",
    "price": 718.50
  }
]

export const fetchProducts = createAction(FETCH_PRODUCTS, () => products);
