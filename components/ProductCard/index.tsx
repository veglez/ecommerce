import React from 'react';
import Image from 'next/image';
import Score from 'components/Score';
import styles from './styles.module.scss';
import Trash from 'components/Icons/Trash';
import { connect } from 'react-redux';
import { favoritesTypes } from 'reducers/favoritesReducer';
import * as favoritesActions from 'actions/favoritesActions';
import { productCardProps } from './types';
import { ProductItem } from 'index';

// interface productCardProps {
//   deleteFavorite: (id: string) => {};
// }

const ProductCard = (props: ProductItem) => {
  const {
    thumbnail,
    name,
    price,
    previousPrice,
    percentageOff,
    score,
    isFavorite,
    id,
  } = props;
  return (
    <article className={styles.container}>
      <div className={styles.image}>
        <Image
          src={thumbnail.src}
          alt={thumbnail.alt}
          height={133}
          width={133}
        />
      </div>
      <div>
        <h6 className={styles.title}>{name}</h6>
        {score && <Score score={score} starSize={12} />}
      </div>
      <div className={styles.footer}>
        <div className={styles.footer__left}>
          <p className={styles.price}>{price}</p>
          {percentageOff && (
            <div className={styles.discount}>
              <span className={styles.previousPrice}>{previousPrice}</span>
              <span className={styles.percentage}>{percentageOff}</span>
            </div>
          )}
        </div>
        {isFavorite && <Trash onClick={() => props.deleteFavorite(id)} />}
      </div>
    </article>
  );
};

const state = (reducers: any) => reducers.favoritesReducer;

export default connect(state, favoritesActions)(ProductCard);
