import React from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
const Ad = (props: {
  src: string | StaticImageData;
  alt: string;
  title: string;
  subtitle: string;
}) => {
  const { src, alt, title, subtitle } = props;
  return (
    <div className={styles.container}>
      <Image src={src} alt={alt} />
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </div>
  );
};

export default Ad;
