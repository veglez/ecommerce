import { User } from 'index';
import {
  AUTH_SAVE_TOKEN,
  AUTH_LOGOUT,
  AUTH_FETCHING_ERROR,
  AUTH_FETCHING,
} from 'src/redux/config/actionsTypes';
import { AuthTypes } from '../types';

interface AuthState {
  isLoading: boolean;
  isLoggedIn: boolean;
  user: User | null;
  token: string | null;
  error: string | null;
}

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  user: null,
  token: null,
  error: null,
};

const authReducer = (
  state: AuthState = initialState,
  action: AuthTypes
): AuthState => {
  switch (action.type) {
    case AUTH_SAVE_TOKEN:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        error: null,
        token: action.payload.token,
        user: action.payload.user,
      };
    case AUTH_FETCHING_ERROR:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        token: null,
        error: action.payload.message,
      };
    case AUTH_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case AUTH_LOGOUT:
      return initialState;
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
