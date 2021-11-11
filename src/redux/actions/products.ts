import { Dispatch } from 'redux';
import { fetchOneProduct, fetchPaginatedProducts } from 'src/services/products';
import {
  PRODUCTS_FETCHING,
  PRODUCTS_FETCHING_ERROR,
  PRODUCTS_GET_ALL,
  PRODUCTS_GET_ONE,
} from '../config/actionsTypes';
import { ProductsTypes } from '../types';

export const getProducts =
  (page: number = 1) =>
  async (dispatch: Dispatch<ProductsTypes>) => {
    dispatch({
      type: PRODUCTS_FETCHING,
    });
    try {
      const res = await fetchPaginatedProducts(page);
      dispatch({ type: PRODUCTS_GET_ALL, payload: res });
    } catch (error: any) {
      dispatch({
        type: PRODUCTS_FETCHING_ERROR,
        payload: { message: error.statusText },
      });
    }
  };

export const getOneProduct =
  (id: string) => async (dispatch: Dispatch<ProductsTypes>) => {
    dispatch({ type: PRODUCTS_FETCHING });
    try {
      const res = await fetchOneProduct(id);
      dispatch({
        type: PRODUCTS_GET_ONE,
        payload: res,
      });
    } catch (error: any) {
      dispatch({
        type: PRODUCTS_FETCHING_ERROR,
        payload: { message: error.message || error.statusText },
      });
    }
  };
