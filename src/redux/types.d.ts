import { paginator, ProductItem, Review } from 'index';
import {
  PRODUCTS_FETCHING,
  PRODUCTS_GET_ALL,
  REVIEWS_FETCHING,
  REVIEWS_GET_ALL,
  REVIEWS_GET_ONE,
} from './config/actionsTypes';

// w;
interface errorPayload {
  message: string;
}

// interface meta {
//   loading: boolean;
// }

export interface successAction<T> {
  payload: T;
  error: false;
  // meta: meta;
}

export interface errorAction {
  payload: errorPayload;
  error: true;
  // meta: meta;
}

/**
 * customAction its a generic type. T represent the payload of the response.
 * Could success response where T its used
 * or errorResponse with a message error in the payload
 */
type customAction<T> = successAction<T> | errorAction;

// PRODUCTS SECTION
interface GetAllProductsSuccess {
  type: typeof PRODUCTS_GET_ALL;
  payload: paginator<ProductItem>;
  error: false;
}
interface GetAllProductsError {
  type: typeof PRODUCTS_GET_ALL;
  payload: errorPayload;
  error: true;
}

interface LoadingProducts {
  type: typeof PRODUCTS_FETCHING;
}

type GetAllProducts = GetAllProductsError | GetAllProductsSuccess;

export type ProductsTypes = GetAllProducts | LoadingProducts;

//reviews SECTION

interface GetAllReviewsSuccess {
  type: typeof REVIEWS_GET_ALL | typeof REVIEWS_GET_ONE;
  payload: paginator<Review>;
  error: false;
}
interface GetAllReviewsError {
  type: typeof REVIEWS_GET_ALL | typeof REVIEWS_GET_ONE;
  payload: errorPayload;
  error: true;
}

interface LoadingReviews {
  type: typeof REVIEWS_FETCHING;
}

type GetAllReviews = GetAllReviewsError | GetAllReviewsSuccess;

export type ReviewsTypes = GetAllReviews | LoadingReviews;

/**
 * The general types for every dispatch in the app
 */
export type AppActions = ProductsTypes | ReviewsTypes;
