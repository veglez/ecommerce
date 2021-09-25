import ReviewCard from 'components/ReviewCard';
import useFetchData from 'hooks/useFetchData';
import { ProductDetails } from 'index';
import { NextPage } from 'next';
import React from 'react';

const ReviewPage: NextPage = () => {
  const res = useFetchData('/api/products/2');
  const data = res.data as unknown as ProductDetails;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <p>This is the ReviewPage page</p>
      {data &&
        data.reviews &&
        data.reviews.map((rew) => {
          return <ReviewCard key={rew.id} {...rew} />;
        })}
    </div>
  );
};

export default ReviewPage;
