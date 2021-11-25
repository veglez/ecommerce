import { paginator, ProductItem, Review, reviewPayload, User } from 'index';
import {
  AUTH_FETCHING,
  AUTH_FETCHING_ERROR,
  AUTH_LOGOUT,
  AUTH_SAVE_TOKEN,
  FETCHING,
  FETCH_ERROR,
  PRODUCTS_CLEAN_ERROR,
  PRODUCTS_FETCHING,
  PRODUCTS_FETCHING_ERROR,
  PRODUCTS_GET_ALL,
  PRODUCTS_GET_ONE,
  REVIEWS_ADD,
  REVIEWS_FETCHING,
  REVIEWS_FETCHING_ERROR,
  REVIEWS_GET_ALL,
  REVIEWS_GET_ONE,
} from './config/actionsTypes';

// w;

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  username: string;
  email: string;
  password: string;
}

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

export interface productReviews {
  paginator: paginator<Review>;
  productId: string | null;
  indexes: dataIndexes;
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
  payload: { token: string; user: User };
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

interface ProductCleanError {
  type: typeof PRODUCTS_CLEAN_ERROR;
}

export type ProductsTypes =
  | GetAllProducts
  | GetOneProduct
  | ProductCleanError
  | FetchProduct
  | FetchProductError;

//reviews SECTION

interface GetAllReviews {
  type: typeof REVIEWS_GET_ALL;
  payload: Omit<productReviews, 'indexes'>;
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

interface AddReview {
  type: typeof REVIEWS_ADD;
  payload: Review;
}

export type ReviewsTypes =
  | GetAllReviews
  | GetOneReview
  | AddReview
  | FetchingReviews
  | FetchingReviewsError;

/**
 * The general types for every dispatch in the app
 */
export type AppActions = AuthTypes | ProductsTypes | ReviewsTypes;
