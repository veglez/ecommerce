import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '@containers/Navbar';
import imagen from 'public/assets/prom02.png';
import Categories from '@containers/Categories/';
import FlashSale from '@containers/FlashSale';
import MegaSale from '@containers/MegaSale';
import Ad from 'components/Ad';
import scrollableSection from 'HOC/scrollableSection';
import Banner from 'components/Banner';
import ProductCard from 'components/ProductCard';
import withFetchedData from 'HOC/withFetchedData';
import Header from 'components/Header';
import banners from 'utils/mocks';

// const Categories = scrollableSection(Category, '/api/categories');
const Banners = scrollableSection({
  Component: Banner,
  componentProps: banners,
});
const Products = withFetchedData(
  ProductCard,
  `${process.env.NEXT_PUBLIC_HOST}/products`
);

const Home: NextPage = () => {
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
      <Products bullets={false} />
      <Navbar />
    </>
  );
};

export default Home;
