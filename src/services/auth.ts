import { AxiosResponse } from 'axios';
import { User } from 'index';
import instance from './request';
interface LoginPayload {
  email: string;
  password: string;
}

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
