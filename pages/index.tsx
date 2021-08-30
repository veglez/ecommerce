import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '@containers/Navbar';
import styles from '../styles/Home.module.css';
import Logo from 'public/assets/logowhite.png';
import Love from 'components/Icons/header/Love';
import Notification from 'components/Icons/header/Notification';
import Search from 'components/Icons/Search';

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

      <article className={styles.offer}>
        <p>Super Flash Sale</p>
        <p>50% Off</p>
        <div className={styles.timer}>
          <div className={styles.clock_container}>
            <span>08</span>
          </div>
          :
          <div className={styles.clock_container}>
            <span>34</span>
          </div>
          :
          <div className={styles.clock_container}>
            <span>52</span>
          </div>
        </div>
      </article>

      <main className={styles.main}></main>

      <Navbar />
    </div>
  );
};

export default Home;
