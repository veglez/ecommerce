import React, { useEffect } from 'react';
import RegisterForm from '@containers/RegisterForm';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAppSelector } from 'src/redux/config/store';
import { REDIRECT_URI } from 'src/config/constants';
import WelcomeHeader from '@containers/WelcomeHeader';

const Register = () => {
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
          title="Let's get started"
          subtitle='Create a new account'
        />
        <RegisterForm />
        <p>
          Have an account?{' '}
          <Link href='/login'>
            <a>Log in</a>
          </Link>
        </p>
      </div>
      <style jsx>
        {`
          .container {
            text-align: center;
          }
          a {
            color: var(--blue);
          }
        `}
      </style>
    </>
  );
};

export default Register;
