import axios from 'axios';
import { authTypes } from '../config/actionsTypes';
import { Dispatch } from 'redux';
import { checkCredentials } from 'src/services/auth';

interface LoginPayload {
  email: string;
  password: string;
}

export const login = (payload: LoginPayload) => async (dispatch: Dispatch) => {
  dispatch({
    type: authTypes.FETCHING_TOKEN,
  });
  try {
    const res = await checkCredentials(payload);
    dispatch({
      type: authTypes.SAVE_TOKEN,
      token: res.data.token,
    });
  } catch (error: any) {
    dispatch({
      type: authTypes.BAD_CREDENTIALS,
      error: error.response.data.err,
    });
  }
};

export const logout = () => (dispatch: Dispatch) => {
  dispatch({
    type: authTypes.LOGOUT,
  });
};

export const refresh = () => async (dispatch: Dispatch) => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/auth/bobjwt`, {
    withCredentials: true,
  });

  dispatch({
    type: authTypes.SAVE_TOKEN,
    token: res.data.token,
  });
};
