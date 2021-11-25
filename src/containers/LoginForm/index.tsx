import React from 'react';
import Input from 'components/Input';
import Message from 'components/Icons/Message';
import Lock from 'components/Icons/Lock';
import Button from 'components/Button';
import { useAppDispatch, useAppSelector } from 'src/redux/config/store';
import { login } from 'src/redux/actions/auth';
import Forms from '@containers/Form';

const LoginForm: React.FC = () => {
  const email = React.useRef<HTMLInputElement>(null);
  const pass = React.useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const store = useAppSelector((state) => state.auth);

  React.useEffect(() => {
    if (store.error) {
      setTimeout(() => dispatch({ type: 'reset' }), 2000);
    }
  }, [store.error, dispatch]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email && email.current?.value && pass && pass.current?.value) {
      dispatch(
        login({
          email: email.current.value,
          password: pass.current.value,
        })
      );
    }
  };

  return (
    <Forms loading={store.isLoading} alertMessage={store.error}>
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

        <Button text='Login' />
      </form>
    </Forms>
  );
};

export default LoginForm;
