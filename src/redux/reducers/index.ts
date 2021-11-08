import { combineReducers } from 'redux';
import auth from './auth';
import products from './products';
import reviews from './reviews';

export default combineReducers({
  auth,
  products,
  reviews,
});
