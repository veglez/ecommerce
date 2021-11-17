import { paginator, ProductItem } from 'index';
import {
  PRODUCTS_CLEAN_ERROR,
  PRODUCTS_FETCHING,
  PRODUCTS_FETCHING_ERROR,
  PRODUCTS_GET_ALL,
  PRODUCTS_GET_ONE,
} from '../config/actionsTypes';
import { dataIndexes, ProductsTypes } from '../types';

interface productsState {
  loading: boolean;
  products: ProductItem[];
  indexes: dataIndexes;
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
  indexes: {},
};

const productsReducer = (
  state = initialState,
  action: ProductsTypes
): productsState => {
  const { type } = action;
  switch (type) {
    case PRODUCTS_CLEAN_ERROR:
      return {
        ...state,
        error: null,
      };
    case PRODUCTS_FETCHING:
      return {
        ...state,
        products: [...state.products],
        meta: { ...state.meta },
        loading: true,
        error: null,
      };
    case PRODUCTS_FETCHING_ERROR:
      return {
        ...state,
        products: state.products,
        meta: state.meta,
        loading: false,
        error: action.payload.message,
      };
    case PRODUCTS_GET_ALL:
      const { data, ...currentMeta } = action.payload;
      const newProducts = data.filter((p) => !(p.id in state.indexes));
      const newIndexes: dataIndexes = {};
      newProducts.forEach((p) => {
        newIndexes[p.id] = null;
      });
      return {
        ...state,
        meta: { ...currentMeta },
        products: [...state.products, ...newProducts],
        indexes: { ...state.indexes, ...newIndexes },
        error: null,
        loading: false,
      };
    case PRODUCTS_GET_ONE:
      return {
        ...state,
        error: null,
        loading: false,
        products: [...state.products, action.payload],
      };
    default:
      return state;
  }
};

export default productsReducer;
