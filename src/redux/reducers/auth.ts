import {
  AUTH_SAVE_TOKEN,
  AUTH_BAD_CREDENTIALS,
  AUTH_FETCHING_TOKEN,
  AUTH_LOGOUT,
} from 'src/redux/config/actionsTypes';

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  user: null,
  token: null,
  error: null,
};

type State = typeof initialState;

const authReducer = (state: State = initialState, action: any) => {
  switch (action.type) {
    case AUTH_SAVE_TOKEN:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        error: null,
        token: action.token,
      };
    case AUTH_BAD_CREDENTIALS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        token: null,
        error: action.error,
      };
    case AUTH_FETCHING_TOKEN:
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
