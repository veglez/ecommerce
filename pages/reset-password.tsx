import ResetPasswordForm from '@containers/ResetPasswordForm';
import WelcomeHeader from '@containers/WelcomeHeader';
import React from 'react';

const ResetPassword = () => {
  return (
    <>
      <WelcomeHeader title='Recover your password' subtitle='' />
      <ResetPasswordForm />
    </>
  );
};

export default ResetPassword;
