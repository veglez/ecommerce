import WelcomeHeader from '@containers/WelcomeHeader';
import Button from 'components/Button';
import Message from 'components/Icons/Message';
import Input from 'components/Input';
import React, { ReactEventHandler, useState, useEffect } from 'react';
import Link from 'next/link';
import Alert from 'components/Alert';
import axios, { AxiosError } from 'axios';
import { serverErrorResponse } from 'src/redux/types';
import { BASE_URL } from 'src/config/constants';
import { useRouter } from 'next/router';

const RecoveryPassword = () => {
  const [status, setStatus] = useState(false);
  const router = useRouter();
  const [disabled, setDisabled] = useState(false);
  let redirectionFromPage: NodeJS.Timeout | null = null;

  const handleSubmit: ReactEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = form.elements.namedItem('email') as HTMLInputElement;
    if (email.value) {
      setDisabled(true);
      try {
        const res = await axios.post(`${BASE_URL}/auth/recovery`, {
          email: email.value,
        });
      } catch (e: any) {
        const res: AxiosError<serverErrorResponse> = e;
      }
      setStatus(true);
      redirectionFromPage = setTimeout(() => {
        router.push('/');
      }, 2000);
    }
  };

  useEffect(() => {
    return () => {
      if (redirectionFromPage) clearTimeout(redirectionFromPage);
    };
  }, [redirectionFromPage]);

  return (
    <>
      <div>
        <WelcomeHeader
          title='Recover your password'
          subtitle='Please introduce the email you used to register'
        />
        <Alert type={'Success'}>
          {status &&
            'Check your email and follow the instructions to recover your password'}
        </Alert>
        <form onSubmit={handleSubmit}>
          <Input type='email' Icon={Message} name='email' />
          <Button text='Recover password' disabled={disabled} />
        </form>
        <p>
          Don&apos;t have an account?{' '}
          <Link href='/register'>
            <a className='link'>Register</a>
          </Link>
        </p>
      </div>
      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          gap: 24px;
          justify-content: center;
          margin: 50% 0;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .link {
          color: var(--blue);
        }
      `}</style>
    </>
  );
};

export default RecoveryPassword;
