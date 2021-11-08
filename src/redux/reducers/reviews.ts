import { paginator, Review } from 'index';
import { REVIEWS_FETCHING, REVIEWS_GET_ALL } from '../config/actionsTypes';
import { ReviewsTypes } from '../types';

interface reviewsState {
  loading: boolean;
  reviews: Review[];
  error: string | null;
  meta: Omit<paginator<Review>, 'data'>;
}

const initialState: reviewsState = {
  meta: {
    totalDocs: 0,
    docsPerPage: 0,
    hasNext: false,
    hasPrev: false,
    page: 0,
    next: null,
    prev: null,
  },
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
      if (action.error) {
        const { message } = action.payload;
        return {
          ...state,
          error: message,
          loading: false,
          reviews: [...state.reviews],
          meta: { ...state.meta },
        };
      }

      const { data, ...rest } = action.payload;
      return {
        ...state,
        reviews: [...state.reviews, ...data],
        meta: rest,
        loading: false,
      };

    case REVIEWS_FETCHING:
      console.log(
        'Iam fetching, is the state right just ith detructurign? aka ...state',
        { ...state },
        "*************LET'S SEE************"
      );
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

export default reviewsReducer;
