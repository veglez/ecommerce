import React from 'react';
import { NextPage } from 'next';
import Input from 'components/Input';
import LoginForm from '@containers/LoginForm';

const Login: NextPage = () => {
  return (
    <div>
      <h2>Login</h2>
      <LoginForm />
    </div>
  );
};

export default Login;
