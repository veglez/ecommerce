import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '@containers/Navbar';
import imagen from 'public/assets/prom02.png';
import Categories from '@containers/Categories/';
import FlashSale from '@containers/FlashSale';
import MegaSale from '@containers/MegaSale';
import Ad from 'components/Ad';
import scrollableSection from 'src/HOC/scrollableSection';
import Banner from 'components/Banner';
import ProductCard from 'components/ProductCard';
import Header from 'components/Header';
import banners from 'src/utils/mocks';
import { useAppDispatch, useAppSelector } from 'src/redux/config/store';
import React from 'react';
import { getProducts } from 'src/redux/actions/products';
import MainContainer from '@containers/MainContainer';

// const Categories = scrollableSection(Category, '/api/categories');
const Banners = scrollableSection({
  Component: Banner,
  componentProps: banners,
});

const Home: NextPage = () => {
  // const dispatch = useAppDispatch();
  const store = useAppSelector((state) => state.products);

  // React.useEffect(() => {
  //   dispatch(getProducts());
  // }, [dispatch]);
  console.log('STORE INDEx', store);

  return (
    // <div className={styles.container}>
    <>
      <Head>
        <title>Lafyuu</title>
        <meta name='description' content='Specialist in amazing items' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />

      <Banners bullets={true} />
      <Categories />
      <FlashSale />
      <MegaSale />
      <Ad
        src={imagen}
        alt='some alt'
        title={'Recomended Product'}
        subtitle={'We recommend the best for you'}
      />
      <MainContainer
        Component={ProductCard}
        // componentData={store.products}
        // loading={store.loading}
        // error={store.error}
      />
      <Navbar />
    </>
  );
};

export default Home;
