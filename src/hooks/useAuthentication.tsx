import { useRouter } from 'next/router';
import React from 'react';
import { useAppDispatch, useAppSelector } from 'src/redux/config/store';
import { REDIRECT_URI } from 'src/config/constants';
import { refresh } from 'src/redux/actions/auth';
import { tokenPayload } from 'index';

const useAuthentication = () => {
  const router = useRouter();
  const auth = useAppSelector((s) => s.auth);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (auth.error) {
      router.push(`/login?${REDIRECT_URI}=${encodeURI(router.asPath)}`);
    }
    !auth.isLoggedIn && dispatch(refresh());
  }, [dispatch, auth, router]);

  React.useEffect(() => {
    if (auth.token) {
      const base64Content = auth.token.split('.')[1];
      const bufferContent = Buffer.from(base64Content, 'base64');
      const stringContent = bufferContent.toString();
      const paylaod: tokenPayload = JSON.parse(stringContent);
      const { exp } = paylaod;
      console.log(paylaod);
      const isExpired = parseInt(exp) * 1000 < +new Date();
      if (isExpired) {
        dispatch(refresh());
        console.log('se ha refrescado porque token expired');
      }
    }
  }, [auth.token]);
};

export default useAuthentication;
