import { AxiosResponse } from 'axios';
import { User } from 'index';
import { LoginPayload, RegisterPayload } from 'src/redux/types';
import instance from './request';

interface serverData {
  token: string;
  user: User;
}

export const checkCredentials = async (credentials: LoginPayload) => {
  return instance.post<serverData, AxiosResponse<serverData>, LoginPayload>(
    '/auth/login',
    credentials
  );
};

export const refreshSession = () => {
  const endpoint = `/auth/bobjwt`;
  const res = instance.get<serverData>(endpoint);
  return res;
};

export const registerService = async (data: RegisterPayload) => {
  return instance.post<serverData, AxiosResponse<serverData>, RegisterPayload>(
    '/auth/register',
    data
  );
};
