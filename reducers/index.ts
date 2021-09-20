import { combineReducers } from 'redux';
import favoritesReducer from './favoritesReducer';

export default combineReducers({ favoritesReducer });

export interface action {
  type: string;
  payload: any;
}
