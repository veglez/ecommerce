import { query, Review } from 'index';
import { Dispatch } from 'redux';
import { fetchPaginatedReviews } from 'src/services/reviews';
import { REVIEWS_FETCHING, REVIEWS_GET_ALL } from '../config/actionsTypes';
import { ReviewsTypes } from '../types';

interface Params extends query<Review> {
  productId: string;
}

export const getReviews =
  (params: Params) => async (dispatch: Dispatch<ReviewsTypes>) => {
    dispatch({ type: REVIEWS_FETCHING });
    try {
      const res = await fetchPaginatedReviews(params);
      dispatch({ type: REVIEWS_GET_ALL, error: false, payload: res });
    } catch (err: any) {
      dispatch({
        type: REVIEWS_GET_ALL,
        error: true,
        payload: { message: err.message || "can't fetch reviews" },
      });
    }
  };