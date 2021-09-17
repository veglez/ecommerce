import Navbar from '@containers/Navbar';
import Header from 'components/Header';
import ProductCard from 'components/ProductCard';
import withFetchedData from 'HOC/withFetchedData';
import React from 'react';

const Favorites = () => {
  const Favorites = withFetchedData(ProductCard, '/api/favorites');
  return (
    <>
      <Header />
      <p>This is favorites page</p>
      <p>let&apos;s see what happened</p>
      <Favorites />
      <Navbar />
    </>
  );
};

export default Favorites;
