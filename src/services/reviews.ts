import axios from 'axios';
import { query, Review } from 'index';
import { BASE_URL } from 'src/config/constants';
import { productReviews } from 'src/redux/types';
import instance from './request';

interface Params extends query<Review> {
  productId: string;
}

export const fetchPaginatedReviews = async (params: Params) => {
  const { page = 1, limit = 20, productId, sortBy } = params;
  //i need an utility function that return an string (should be a valid endpoint) that accepts query params
  const endpoint = `${BASE_URL}/products/${productId}/reviews?page=${page}&limit=${limit}&sortBy=${sortBy}`;
  return await axios.get<productReviews>(endpoint);
};

export const PostOneReview = async (
  productId: string,
  formData: FormData,
  token: string | null
) => {
  const endpoint = `${BASE_URL}/reviews/${productId}`;
  if (!token) throw new Error('Token missing');
  return await instance.post<Review>(endpoint, formData, {
    headers: {
      // 'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  });
};
