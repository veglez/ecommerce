import ReviewCard from 'components/ReviewCard';
import useFetchData from 'src/hooks/useFetchData';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import Button from 'components/Button';
import { useAppSelector } from 'src/redux/config/store';

const ReviewPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  // const endpoint = `${process.env.NEXT_PUBLIC_HOST}/products/${id}/reviews`;
  // const res = useFetchData(endpoint);
  // const data = res.data;

  const state = useAppSelector((s) => s.reviews);

  const handleClick = () => {
    router.push(`/review/add/${id}`);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <p>This is the ReviewPage page</p>
      {state.loading ? (
        <h2>Spinner component</h2>
      ) : state.error ? (
        <h2>{state.error}</h2>
      ) : state.meta.totalDocs > 0 ? (
        state.reviews.map((rew) => {
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
