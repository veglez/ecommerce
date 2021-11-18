import ReviewCard from 'components/ReviewCard';
import useFetchData from 'src/hooks/useFetchData';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import Button from 'components/Button';
import { useAppDispatch, useAppSelector } from 'src/redux/config/store';
import useObjectIdVerification from 'src/hooks/useObjectIdVerification';
import { getReviews } from 'src/redux/actions/reviews';
import { productReviews } from 'src/redux/types';

const ReviewPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  // const gl = useAppSelector((s) => s.reviews);
  // const dispatch = useAppDispatch();
  // console.log('GLOBAL STATE OF REVIE', gl);

  // // useEffect(() => {
  // //   if (!!id) {
  // //     dispatch(getReviews({ productId: id as string }));
  // //   }
  // // }, [id, dispatch]);

  // // useEffect(() => {
  // //   if (state.error) {
  // //     setTimeout(() => router.push('/'), 1500);
  // //   }
  // // }, [state.error, router]);

  const { loading, error, data } = useObjectIdVerification({
    cb: getReviews,
    stateSelector: 'reviews',
    idName: 'productId',
    useCurrentId: false,
    redirect: true,
    // extra: { limit: 5, sortBy: '-score' },
  });

  const state = data as productReviews;
  const handleClick = () => {
    router.push(`/review/add/${id}`);
  };

  if (loading) return <h3>Loading the data</h3>;
  if (error)
    return (
      <div>
        <h3>Error embebed</h3>
        <p>This shouldnt redirect to homepage</p>
      </div>
    );

  // console.log('STATE OF THE ART', state);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <p>This is the ReviewPage page</p>
      {loading ? (
        <h2>Spinner component</h2>
      ) : error ? (
        <>
          <h2>{error}</h2>
          <p>Redireccionando al home</p>
        </>
      ) : !!state && state.paginator.data.length > 0 ? (
        state.paginator.data.map((rew) => {
          return <ReviewCard key={rew.id} {...rew} />;
        })
      ) : (
        <h2>No hay reviews</h2>
      )}
      <Button text='Add review' onClick={handleClick} />
    </div>
  );
};

export default ReviewPage;
