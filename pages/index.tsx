import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '@containers/Navbar';
import styles from '../styles/Home.module.css';
import Logo from 'public/assets/logowhite.png';
import Love from 'components/Icons/Love';
import Notification from 'components/Icons/Notification';
import Search from 'components/Icons/Search';
import imagen from 'public/assets/prom02.png';
import Test from 'components/Test';
import Categories from '@containers/Categories/';
import Offers from '@containers/Offers';
import FlashSale from '@containers/FlashSale';
import MegaSale from '@containers/MegaSale';
import Ad from 'components/Ad';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lafyuu</title>
        <meta name='description' content='Specialist in amazing items' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header className={styles.header}>
        <Image src={Logo} alt='Logo icon' width={64} height={64} />
        <label htmlFor='mainSearch' className={styles.header__label}>
          <Search className={styles.search} />
          <input
            placeholder='Search Product'
            type='search'
            name='search'
            id='mainSearch'
          />
        </label>
        <div className={styles.header__icons}>
          <Love />
          <Notification />
        </div>
      </header>

      <Offers />
      <Categories />
      <FlashSale />
      <MegaSale />
      <Ad src={imagen} alt='some alt' />
      {/* <Test /> */}

      <main className={styles.main}></main>

      <Navbar />
    </div>
  );
};

export default Home;
