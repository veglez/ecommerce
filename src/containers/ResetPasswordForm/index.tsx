import Form from '@containers/Form';
import { AxiosError } from 'axios';
import Button from 'components/Button';
import Input from 'components/Input';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { serverErrorResponse } from 'src/redux/types';
import instance from 'src/services/request';

const ResetPasswordForm = () => {
  const router = useRouter();
  const [msg, setMsg] = useState<string | null>(null);
  const [type, setType] = useState<'Danger' | 'Alert' | 'Success'>('Danger');
  const { token } = router.query;

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    if (!token) {
      setMsg('Token missing redirecting to login page...');
      setTimeout(() => {
        router.push('/login');
      }, 1000);
    } else {
      const pass0 = form.elements.namedItem('password') as HTMLInputElement;
      const pass1 = form.elements.namedItem('password1') as HTMLInputElement;
      if (pass0.value !== pass1.value) {
        setMsg("Passwords didn't match");
        setTimeout(() => {
          form.reset();
          setMsg(null);
        }, 1000);
      } else {
        try {
          await instance.post('/auth/reset-password', {
            token,
            newPassword: pass0.value,
          });
          setType('Success');
          setMsg('Password changed successfully. Redirecting to login page');
          setTimeout(() => {
            router.push('/login');
          }, 1000);
        } catch (e) {
          const err = e as AxiosError<serverErrorResponse>;
          !!err.response && setMsg(err.response.data.err);
        }
      }
    }
  };

  return (
    <Form alertMessage={msg} loading={false} type={type}>
      <form onSubmit={handleSubmit}>
        <Input
          type='password'
          name='password'
          placeholder='Introduce new password'
          required
        />
        <Input
          type='password'
          name='password1'
          placeholder='Repeat new password'
          required
        />
        <Button text='Change your password' />
      </form>
    </Form>
  );
};

export default ResetPasswordForm;
