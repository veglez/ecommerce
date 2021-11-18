import axios, { AxiosResponse } from 'axios';
import { paginator, ProductItem, query } from 'index';
import { BASE_URL } from 'src/config/constants';

export const fetchPaginatedProducts = async ({
  page = 1,
  limit = 20,
}: query<ProductItem>): Promise<paginator<ProductItem>> => {
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
  return await axios.get<ProductItem, AxiosResponse<ProductItem, never>, never>(
    endpoint
  );
};
