import { paginator, ProductItem } from 'index';
import { Action } from 'redux';
import { PRODUCTS_FETCHING, PRODUCTS_GET_ALL } from '../config/actionsTypes';
import { ProductsTypes } from '../types';

interface productsState {
  loading: boolean;
  products: ProductItem[];
  error: string | null;
  meta: Omit<paginator<ProductItem>, 'data'>;
}

const initialState: productsState = {
  meta: {
    totalDocs: 0,
    docsPerPage: 0,
    hasNext: false,
    hasPrev: false,
    page: 0,
    next: null,
    prev: null,
  },
  products: [],
  loading: false,
  error: null,
};

const productsReducer = (
  state = initialState,
  action: ProductsTypes
): productsState => {
  const { type } = action;
  switch (type) {
    case PRODUCTS_GET_ALL:
      if (action.error) {
        return {
          products: [...state.products],
          meta: { ...state.meta },
          loading: false,
          error: action.payload.message,
        };
      }
      const { data, ...currentMeta } = action.payload;
      return {
        meta: { ...currentMeta },
        products: [...state.products, ...data],
        error: null,
        loading: false,
      };
    case PRODUCTS_FETCHING:
      return {
        products: [...state.products],
        meta: { ...state.meta },
        loading: true,
        error: null,
      };

    default:
      return state;
  }
};

export default productsReducer;
