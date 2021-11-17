import { AxiosError } from 'axios';
import { query, Review } from 'index';
import { Dispatch } from 'redux';
import { fetchPaginatedReviews, PostOneReview } from 'src/services/reviews';
import {
  REVIEWS_ADD,
  REVIEWS_FETCHING,
  REVIEWS_FETCHING_ERROR,
  REVIEWS_GET_ALL,
} from '../config/actionsTypes';
import { RootState } from '../config/store';
import { ReviewsTypes, serverErrorResponse } from '../types';

interface Params extends query<Review> {
  productId: string;
}

export const getReviews =
  (params: Params) => async (dispatch: Dispatch<ReviewsTypes>) => {
    dispatch({ type: REVIEWS_FETCHING });
    try {
      const res = await fetchPaginatedReviews(params);
      dispatch({ type: REVIEWS_GET_ALL, payload: res.data });
    } catch (err: any) {
      dispatch({
        type: REVIEWS_FETCHING_ERROR,
        payload: { message: err.err || "can't fetch reviews" },
      });
    }
  };

export const publishReview =
  (productId: string, formData: FormData) =>
  async (dispatch: Dispatch<ReviewsTypes>, getState: () => RootState) => {
    dispatch({
      type: REVIEWS_FETCHING,
    });
    try {
      const token = getState().auth.token;
      const res = await PostOneReview(productId, formData, token);
      dispatch({ type: REVIEWS_ADD, payload: res.data });
    } catch (e: any) {
      const error = e as AxiosError<serverErrorResponse>;
      dispatch({
        type: REVIEWS_FETCHING_ERROR,
        payload: {
          message: error.response?.data.err || 'ERROR POSTING REVIEW',
        },
      });
    }
  };
