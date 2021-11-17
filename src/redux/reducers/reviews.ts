import { paginator, Review } from 'index';
import {
  REVIEWS_ADD,
  REVIEWS_FETCHING,
  REVIEWS_FETCHING_ERROR,
  REVIEWS_GET_ALL,
} from '../config/actionsTypes';
import { productReviews, ReviewsTypes } from '../types';

interface reviewsState {
  reviews: productReviews[];
  loading: boolean;
  error: null | string;
}

const initialReview: productReviews = {
  productId: null,
  paginator: {
    data: [],
    totalDocs: null,
    docsPerPage: 0,
    hasNext: false,
    hasPrev: false,
    page: 0,
    next: null,
    prev: null,
  },
};

const initialState: reviewsState = {
  reviews: [],
  loading: false,
  error: null,
};

const reviewsReducer = (
  state = initialState,
  action: ReviewsTypes
): reviewsState => {
  switch (action.type) {
    case REVIEWS_GET_ALL:
      return {
        ...state,
        reviews: [...state.reviews, action.payload],
        loading: false,
        error: null,
      };
    case REVIEWS_FETCHING_ERROR:
      const { message } = action.payload;
      return {
        ...state,
        error: message,
        loading: false,
      };
    case REVIEWS_FETCHING:
      return {
        ...state,
        loading: true,
      };
    case REVIEWS_ADD:
      const addOne = {
        ...state.reviews,
      };
      return {
        ...state,
        loading: false,
        error: null,
        reviews: [...state.reviews, action.payload],
      };
    default:
      return state;
  }
};

export default reviewsReducer;
