import axios, { AxiosError } from 'axios';
import {
  AUTH_SAVE_TOKEN,
  AUTH_LOGOUT,
  AUTH_FETCHING_ERROR,
  AUTH_FETCHING,
} from '../config/actionsTypes';
import { Dispatch } from 'redux';
import {
  checkCredentials,
  refreshSession,
  registerService,
} from 'src/services/auth';
import {
  AuthTypes,
  LoginPayload,
  RegisterPayload,
  serverErrorResponse,
} from '../types';

export const login =
  (payload: LoginPayload) => async (dispatch: Dispatch<AuthTypes>) => {
    dispatch({
      type: AUTH_FETCHING,
    });
    try {
      const res = await checkCredentials(payload);
      dispatch({
        type: AUTH_SAVE_TOKEN,
        payload: { token: res.data.token, user: res.data.user },
      });
    } catch (error: any) {
      const res: AxiosError<serverErrorResponse> = error;
      !!res.response &&
        dispatch({
          type: AUTH_FETCHING_ERROR,
          payload: { message: res.response.data.err },
        });
    }
  };

export const logout = () => (dispatch: Dispatch) => {
  dispatch({
    type: AUTH_LOGOUT,
  });
};

export const register =
  (data: RegisterPayload) => async (dispatch: Dispatch<AuthTypes>) => {
    dispatch({
      type: AUTH_FETCHING,
    });
    try {
      const res = await registerService(data);
      dispatch({
        type: AUTH_SAVE_TOKEN,
        payload: { token: res.data.token, user: res.data.user },
      });
    } catch (e: any) {
      const res: AxiosError<serverErrorResponse> = e;
      !!res.response &&
        dispatch({
          type: AUTH_FETCHING_ERROR,
          payload: { message: res.response.data.err },
        });
    }
  };

export const refresh = () => async (dispatch: Dispatch<AuthTypes>) => {
  try {
    const res = await refreshSession();
    dispatch({
      type: AUTH_SAVE_TOKEN,
      payload: { token: res.data.token, user: res.data.user },
    });
  } catch (error: any) {
    const res: AxiosError<serverErrorResponse, never> = error;
    !!res.response &&
      dispatch({
        type: AUTH_FETCHING_ERROR,
        payload: { message: res.response.data.err },
      });
  }
};
