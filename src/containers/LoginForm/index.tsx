import React from 'react';
import Input from 'components/Input';
import Message from 'components/Icons/Message';
import Lock from 'components/Icons/Lock';
import Button from 'components/Button';
import styles from './styles.module.scss';
import { useAppDispatch, useAppSelector } from 'src/redux/config/store';
import { login } from 'src/redux/actions/auth';
import Spinner from 'components/Spinner';
import { useRouter } from 'next/router';

const LoginForm: React.FC = () => {
  const email = React.useRef<HTMLInputElement>(null);
  const pass = React.useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const store = useAppSelector((state) => state.auth);
  const router = useRouter();

  React.useEffect(() => {
    if (store.error) {
      setTimeout(() => dispatch({ type: 'reset' }), 2000);
    }
  }, [store.error, dispatch]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email && email.current && pass && pass.current) {
      dispatch(
        login({
          email: email.current.value,
          password: pass.current.value,
        })
      );
    }
  };

  if (store.isLoading)
    return (
      <>
        <div className='spn'>
          <Spinner />
        </div>
        <style jsx>
          {`
            div.spn {
              border: 1px solid gray;
              min-height: 212px;
            }
          `}
        </style>
      </>
    );

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          ref={email}
          placeholder='Your Email'
          Icon={Message}
          type={'email'}
          name={'email'}
          id={'loginEmail'}
        />
        <Input
          ref={pass}
          placeholder='Password'
          Icon={Lock}
          type={'password'}
          name='password'
          id='loginPassword'
        />
        {store.isLoading && <h2>Loading...</h2>}

        <p className={styles.error}>{store.error}</p>
        <Button text='Login' />
      </form>

      <style jsx>{`
        form {
          min-height: 212px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
      `}</style>
    </>
  );
};

export default LoginForm;
