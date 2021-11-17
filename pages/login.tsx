import React, { useEffect } from 'react';
import { NextPage } from 'next';
import Input from 'components/Input';
import LoginForm from '@containers/LoginForm';
import { useAppSelector } from 'src/redux/config/store';
import { useRouter } from 'next/router';
import { REDIRECT_URI } from 'src/config/constants';

const Login: NextPage = () => {
  const auth = useAppSelector((s) => s.auth);
  const router = useRouter();
  console.log(auth);

  useEffect(() => {
    const prevRoute = router.query[REDIRECT_URI];
    console.log('prev route ', prevRoute);
    if (auth.isLoggedIn) {
      if (prevRoute) {
        router.push(`${prevRoute}`, undefined, { shallow: true });
      } else {
        router.push('/', undefined, { shallow: true });
      }
    }
  }, [auth.isLoggedIn, router]);

  return (
    <div>
      <h2>Login</h2>
      <LoginForm />
    </div>
  );
};

export default Login;
