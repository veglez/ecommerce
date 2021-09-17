import React from 'react';
import Image from 'next/image';
import Score from 'components/Score';
import styles from './styles.module.scss';
import Trash from 'components/Icons/Trash';

const ProductCard = (props: productCardProps) => {
  const { image, title, price, previous, percentage, score, erase } = props;
  return (
    <article className={styles.container}>
      <div className={styles.image}>
        <Image src={image.src} alt={image.alt} height={133} width={133} />
      </div>
      <div>
        <h6 className={styles.title}>{title}</h6>
        {score && <Score score={score} starSize={12} />}
      </div>
      <div className={styles.footer}>
        <div className={styles.footer__left}>
          <p className={styles.price}>{price}</p>
          {percentage && (
            <div className={styles.discount}>
              <span className={styles.previousPrice}>{previous}</span>
              <span className={styles.percentage}>{percentage}</span>
            </div>
          )}
        </div>
        {erase && <Trash />}
      </div>
    </article>
  );
};

export default ProductCard;
