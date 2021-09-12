import React from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
const Ad = (props) => {
  const { src, alt } = props;
  return (
    <div className={styles.container}>
      <Image src={src} alt={alt} />
      <div className={styles.content}>
        <h2 className={styles.title}>Recomended Product</h2>
        <p className={styles.subtitle}>We recommend the best for you</p>
      </div>
    </div>
  );
};

export default Ad;
