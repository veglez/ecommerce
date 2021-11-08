import { Dispatch } from 'redux';
import { fetchPaginatedProducts } from 'src/services/products';
import { PRODUCTS_FETCHING, PRODUCTS_GET_ALL } from '../config/actionsTypes';
import { ProductsTypes } from '../types';

export const getProducts =
  (page: number = 1) =>
  async (dispatch: Dispatch<ProductsTypes>) => {
    dispatch({
      type: PRODUCTS_FETCHING,
    });
    try {
      const res = await fetchPaginatedProducts(page);
      dispatch({ type: PRODUCTS_GET_ALL, payload: res, error: false });
    } catch (error: any) {
      dispatch({
        type: PRODUCTS_GET_ALL,
        error: true,
        payload: { message: error.statusText },
      });
    }
  };
