import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Search from 'components/Icons/Search';
import Notification from 'components/Icons/Notification';
import Love from 'components/Icons/Love';
import styles from './styles.module.scss';
import Logo from 'public/assets/logowhite.png';
import { useRouter } from 'next/dist/client/router';

const Header = () => {
  const router = useRouter();
  console.log(router);

  return (
    <header className={styles.header}>
      <Link href='/'>
        <a>
          <Image src={Logo} alt='Logo icon' width={64} height={64} />
        </a>
      </Link>
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
        <Link href='/favorites'>
          <a>
            <Love />
          </a>
        </Link>
        <div onClick={() => router.back()}>
          <Notification />
        </div>
      </div>
    </header>
  );
};

export default Header;
