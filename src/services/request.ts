import axios from 'axios';
import { BASE_URL } from 'src/config/constants';

/**
 * It's an enhance axios instance "withCredentials": true
 */
const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export default instance;
