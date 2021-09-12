import React from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';

const ProductCard = (props: productCardProps) => {
  const { image, title, price, previous, percentage } = props;
  return (
    <article className={styles.container}>
      <header className={styles.image}>
        <Image src={image.src} alt={image.alt} />
      </header>
      <h6 className={styles.title}>{title}</h6>
      <p className={styles.price}>{price}</p>
      <div className={styles.discount}>
        <span className={styles.previousPrice}>{previous}</span>
        <span className={styles.percentage}>{percentage}</span>
      </div>
    </article>
  );
};

export default ProductCard;
