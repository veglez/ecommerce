import Button from 'components/Button';
import Lock from 'components/Icons/Lock';
import Message from 'components/Icons/Message';
import User from 'components/Icons/User';
import Input from 'components/Input';
import Alert from 'components/Alert';
import React, { FormEventHandler, useState } from 'react';
import Forms from '@containers/Form';
import { useAppDispatch, useAppSelector } from 'src/redux/config/store';
import { register } from 'src/redux/actions/auth';

const RegisterForm = () => {
  const [error, setError] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const state = useAppSelector((s) => s.auth);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    const form = e.target as HTMLFormElement;
    e.preventDefault();
    //extracting the values from inputs
    const values: { [key: string]: number | string } = {};
    for (const el of form.elements) {
      if (el.nodeName === 'INPUT') {
        const input = el as HTMLInputElement;
        values[input.name] = input.value;
      }
    }
    //verify password in both fields match, if not clear password fields
    if (!(values['password'] === values['repeat-password'])) {
      setError('Las contraseñas no coinciden');
      setTimeout(() => {
        setError('');
        const password = form.elements.namedItem(
          'password'
        ) as HTMLInputElement;
        const password2 = form.elements.namedItem(
          'repeat-password'
        ) as HTMLInputElement;
        password.value = '';
        password2.value = '';
      }, 1500);
      return;
    }
    dispatch(register(values));
  };

  return (
    <Forms alertMessage={error || state.error} loading={state.isLoading}>
      <form onSubmit={handleSubmit}>
        <Input Icon={User} placeholder='Username' name='username' required />
        <Input
          Icon={Message}
          placeholder='Your name'
          type='email'
          name='email'
          required
        />
        <Input
          Icon={Lock}
          placeholder='Your password'
          type='password'
          name='password'
          required
        />
        <Input
          Icon={Lock}
          placeholder='Repeat your password'
          type='password'
          name='repeat-password'
          required
        />
        <Button text='Sign up' />
      </form>
    </Forms>
  );
};

export default RegisterForm;
