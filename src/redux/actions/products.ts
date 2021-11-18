import { paginator, ProductItem } from 'index';
import { Dispatch } from 'redux';
import { fetchOneProduct, fetchPaginatedProducts } from 'src/services/products';
import {
  PRODUCTS_CLEAN_ERROR,
  PRODUCTS_FETCHING,
  PRODUCTS_FETCHING_ERROR,
  PRODUCTS_GET_ALL,
  PRODUCTS_GET_ONE,
} from '../config/actionsTypes';
import { ProductsTypes } from '../types';

export const getProducts =
  (params: paginator<ProductItem>) =>
  async (dispatch: Dispatch<ProductsTypes>) => {
    dispatch({
      type: PRODUCTS_FETCHING,
    });
    try {
      const res = await fetchPaginatedProducts(params);
      dispatch({ type: PRODUCTS_GET_ALL, payload: res });
    } catch (error: any) {
      dispatch({
        type: PRODUCTS_FETCHING_ERROR,
        payload: { message: error.statusText },
      });
      setTimeout(() => dispatch({ type: PRODUCTS_CLEAN_ERROR }), 2050);
    }
  };

export const getOneProduct =
  (id: string) => async (dispatch: Dispatch<ProductsTypes>) => {
    dispatch({ type: PRODUCTS_FETCHING });
    try {
      const res = await fetchOneProduct(id);
      dispatch({
        type: PRODUCTS_GET_ONE,
        payload: res.data,
      });
    } catch (error: any) {
      dispatch({
        type: PRODUCTS_FETCHING_ERROR,
        payload: {
          message:
            error.response.data.err ||
            error.response.data.statusText ||
            'general error fetching one product',
        },
      });

      setTimeout(() => dispatch({ type: PRODUCTS_CLEAN_ERROR }), 2050);
    }
  };
