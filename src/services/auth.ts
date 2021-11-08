import instance from './request';
interface LoginPayload {
  email: string;
  password: string;
}

export const checkCredentials = (credentials: LoginPayload) => {
  return instance.post('/auth/login', credentials);
};
