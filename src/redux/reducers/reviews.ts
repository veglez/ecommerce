import getNews from 'src/utils/extractNews';
import {
  REVIEWS_ADD,
  REVIEWS_FETCHING,
  REVIEWS_FETCHING_ERROR,
  REVIEWS_GET_ALL,
} from '../config/actionsTypes';
import { dataIndexes, productReviews, ReviewsTypes } from '../types';

interface reviewsState {
  reviews: productReviews[];
  loading: boolean;
  error: null | string;
}

const initialReview: productReviews = {
  productId: null,
  indexes: {},
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
    case REVIEWS_GET_ALL: {
      const productId = action.payload.productId;
      const currentReview = state.reviews.filter(
        (pag) => pag.productId === productId
      )[0];
      let ReviewObj: productReviews;
      if (!currentReview) {
        const newIndexes: dataIndexes = {};
        for (const rev of action.payload.paginator.data) {
          newIndexes[rev.id] = null;
        }
        ReviewObj = {
          ...action.payload,
          indexes: newIndexes,
        };
      } else {
        const { data, ...rest } = action.payload.paginator;
        const { newIndexes, newItems } = getNews(data, currentReview.indexes);
        ReviewObj = {
          productId: productId,
          paginator: {
            ...rest,
            data: [...currentReview.paginator.data, ...newItems],
          },
          indexes: { ...currentReview.indexes, ...newIndexes },
        };
      }
      return {
        ...state,
        reviews: state.reviews
          .filter((rev) => rev.productId !== productId)
          .concat(ReviewObj),
        loading: false,
        error: null,
      };
    }
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
      const productId = action.payload.product;
      const currentReview = state.reviews.filter(
        (pag) => pag.productId === productId
      )[0];
      let ReviewObj: productReviews;
      if (!currentReview) {
        const newIndexes: dataIndexes = {};
        newIndexes[productId] = null;
        ReviewObj = {
          productId,
          paginator: {
            ...initialReview.paginator,
            data: [action.payload],
            totalDocs: 1,
          },
          indexes: newIndexes,
        };
      } else {
        const newIndexes = currentReview.indexes;
        newIndexes[productId] = null;
        ReviewObj = {
          ...currentReview,
          paginator: {
            ...currentReview.paginator,
            data: [...currentReview.paginator.data, action.payload],
            totalDocs: (currentReview.paginator.totalDocs as number) + 1,
          },
          indexes: newIndexes,
        };
      }
      const payload = state.reviews
        .filter((rev) => rev.productId !== productId)
        .concat(ReviewObj);
      return {
        ...state,
        loading: false,
        error: null,
        reviews: payload,
      };
    default:
      return state;
  }
};

export default reviewsReducer;
