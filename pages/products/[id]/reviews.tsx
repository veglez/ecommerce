import ReviewCard from 'components/ReviewCard';
import useFetchData from 'hooks/useFetchData';
import { ProductDetails } from 'index';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

const ReviewPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const endpoint = `${process.env.NEXT_PUBLIC_HOST}/products/${id}/reviews`;
  const res = useFetchData(endpoint);
  const data = res.data;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <p>This is the ReviewPage page</p>
      {res.loading ? (
        <h2>Spinner component</h2>
      ) : res.error ? (
        <h2>{res.error}</h2>
      ) : data.totalDocs > 0 ? (
        data.data.map((rew) => {
          return <ReviewCard key={rew.id} {...rew} />;
        })
      ) : (
        <h2>No hay reviews</h2>
      )}
    </div>
  );
};

export default ReviewPage;
