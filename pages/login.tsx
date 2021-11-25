import React, { useEffect, useCallback, useState } from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import LoginForm from '@containers/LoginForm';
import { useAppSelector } from 'src/redux/config/store';
import { useRouter } from 'next/router';
import { REDIRECT_URI } from 'src/config/constants';
import WelcomeHeader from '@containers/WelcomeHeader';

const Login: NextPage = () => {
  const auth = useAppSelector((s) => s.auth);
  const router = useRouter();

  useEffect(() => {
    const prevRoute = router.query[REDIRECT_URI];
    if (auth.isLoggedIn) {
      if (prevRoute) {
        router.push(`${prevRoute}`, undefined, { shallow: true });
      } else {
        router.push('/', undefined, { shallow: true });
      }
    }
  }, [auth.isLoggedIn, router]);

  return (
    <>
      <div className='container'>
        <WelcomeHeader
          title='Welcome to Lafyuu'
          subtitle='Sign in to continue'
        />
        <LoginForm />
        <Link href='/recovery-password'>
          <a className='link'>Forget password?</a>
        </Link>
        <p>
          Don&apos;t have an account?{' '}
          <Link href='/register'>
            <a className='link'>Register</a>
          </Link>
        </p>
      </div>
      <style jsx>{`
        .container {
          text-align: center;
        }

        .link {
          color: var(--blue);
        }
      `}</style>
    </>
  );
};

export default Login;
