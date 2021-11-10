import { paginator, ProductItem, Review } from 'index';
import {
  FETCHING,
  FETCH_ERROR,
  PRODUCTS_FETCHING,
  PRODUCTS_GET_ALL,
  PRODUCTS_GET_ONE,
  REVIEWS_FETCHING,
  REVIEWS_GET_ALL,
  REVIEWS_GET_ONE,
} from './config/actionsTypes';

// w;
interface errorPayload {
  message: string;
}

export interface Fetching {
  type: typeof FETCHING;
}

export interface FetchingError {
  type: typeof FETCH_ERROR;
  payload: errorPayload;
}

export interface dataIndexes {
  [key: string]: null;
}

/**
 * customAction its a generic type. T represent the payload of the response.
 * Could success response where T its used
 * or errorResponse with a message error in the payload
 */
// type customAction<T> = successAction<T> | errorAction;

// PRODUCTS SECTION
interface GetAllProducts {
  type: typeof PRODUCTS_GET_ALL;
  payload: paginator<ProductItem>;
}

interface GetOneProduct {
  type: typeof PRODUCTS_GET_ONE;
  payload: ProductItem;
}

export type ProductsTypes =
  | GetAllProducts
  | GetOneProduct
  | Fetching
  | FetchingError;

//reviews SECTION

interface GetAllReviews {
  type: typeof REVIEWS_GET_ALL | typeof REVIEWS_GET_ONE;
  payload: paginator<Review>;
}
interface GetAllReviewsError {
  type: typeof REVIEWS_GET_ALL | typeof REVIEWS_GET_ONE;
  payload: errorPayload;
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
