import axios from 'axios';
import { paginator, query, Review } from 'index';
import { BASE_URL } from 'src/config/constants';

interface Params extends query<Review> {
  productId: string;
}

export const fetchPaginatedReviews = async (params: Params) => {
  const { page = 1, limit = 20, productId, sortBy } = params;
  //i need an utility function that return an string (should be a valid endpoint) that accepts query params
  const endpoint = `${BASE_URL}/products/${productId}/reviews?page=${page}&limit=${limit}&sortBy=${sortBy}`;
  try {
    const res = await axios.get<paginator<Review>>(endpoint);
    return res.data;
  } catch (error: any) {
    throw error.response.data;
  }
};
