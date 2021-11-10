import axios, { AxiosResponse } from 'axios';
import { paginator, ProductItem } from 'index';
import { BASE_URL } from 'src/config/constants';

export const fetchPaginatedProducts = async (
  page: number = 1,
  limit: number = 20
) => {
  const endpoint = `${BASE_URL}/products?page=${page}&limit=${limit}`;
  try {
    const res = await axios.get<paginator<ProductItem>>(endpoint);
    return res.data;
  } catch (error: any) {
    throw error.response;
  }
};

export const fetchOneProduct = async (id: string) => {
  const endpoint = `${BASE_URL}/products/${id}`;
  try {
    const res = await axios.get<ProductItem>(endpoint);
    return res.data;
  } catch (error: any) {
    throw error.response;
  }
};
