import Navbar from '@containers/Navbar';
import Header from 'components/Header';
import ProductCard from 'components/ProductCard';
import withFetchedData from 'HOC/withFetchedData';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as FavsActions from 'actions/favoritesActions';
import { ProductItem } from 'index';

const State = (reducer: any) => {
  return reducer.favoritesReducer;
};

const Favorites = (props: any) => {
  const { data, getFavorites } = props;
  // const Favorites = withFetchedData(ProductCard, '/api/favorites');

  useEffect(() => {
    getFavorites();
  }, [getFavorites]);

  return (
    <>
      <Header />
      <p>This is favorites page</p>
      <p>let&apos;s see what happened</p>
      {/* <Favorites /> */}
      {data.map((item: ProductItem) => (
        <ProductCard key={item.id} {...item} />
      ))}
      <Navbar />
    </>
  );
};

export default connect(State, FavsActions)(Favorites);
