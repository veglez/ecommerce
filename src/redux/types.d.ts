import { paginator, ProductItem, Review } from 'index';
import {
  AUTH_FETCHING,
  AUTH_FETCHING_ERROR,
  AUTH_LOGOUT,
  AUTH_SAVE_TOKEN,
  FETCHING,
  FETCH_ERROR,
  PRODUCTS_FETCHING,
  PRODUCTS_FETCHING_ERROR,
  PRODUCTS_GET_ALL,
  PRODUCTS_GET_ONE,
  REVIEWS_FETCHING,
  REVIEWS_FETCHING_ERROR,
  REVIEWS_GET_ALL,
  REVIEWS_GET_ONE,
} from './config/actionsTypes';

// w;

export interface serverErrorResponse {
  message: string;
  err: string;
}
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

//AUTH SECTION

interface GetToken {
  type: typeof AUTH_SAVE_TOKEN;
  token: string;
}

interface Logout {
  type: typeof AUTH_LOGOUT;
}

interface FetchAuth {
  type: typeof AUTH_FETCHING;
}

interface FetchAuthError {
  type: typeof AUTH_FETCHING_ERROR;
  payload: errorPayload;
}

export type AuthTypes = GetToken | Logout | FetchAuth | FetchAuthError;

// PRODUCTS SECTION
interface GetAllProducts {
  type: typeof PRODUCTS_GET_ALL;
  payload: paginator<ProductItem>;
}

interface GetOneProduct {
  type: typeof PRODUCTS_GET_ONE;
  payload: ProductItem;
}

interface FetchProduct {
  type: typeof PRODUCTS_FETCHING;
}

interface FetchProductError {
  type: typeof PRODUCTS_FETCHING_ERROR;
  payload: errorPayload;
}

export type ProductsTypes =
  | GetAllProducts
  | GetOneProduct
  | FetchProduct
  | FetchProductError;

//reviews SECTION

interface GetAllReviews {
  type: typeof REVIEWS_GET_ALL;
  payload: paginator<Review>;
}
interface GetOneReview {
  type: typeof REVIEWS_GET_ONE;
  payload: Review;
}

interface FetchingReviews {
  type: typeof REVIEWS_FETCHING;
}

interface FetchingReviewsError {
  type: typeof REVIEWS_FETCHING_ERROR;
  payload: errorPayload;
}

export type ReviewsTypes =
  | GetAllReviews
  | GetOneReview
  | FetchingReviews
  | FetchingReviewsError;

/**
 * The general types for every dispatch in the app
 */
export type AppActions = AuthTypes | ProductsTypes | ReviewsTypes;
