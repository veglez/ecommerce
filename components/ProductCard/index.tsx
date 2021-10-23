import React from 'react';
import { connect } from 'react-redux';
import Image from 'next/image';
import Link from 'next/link';
import Score from 'components/Score';
import styles from './styles.module.scss';
import Trash from 'components/Icons/Trash';
import * as favoritesActions from 'actions/favoritesActions';
import { ProductItem } from 'index';
import NumberFormater from 'utils/currency';

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
  console.log('ID: ', id);
  return (
    <Link href={`/products/${id}`}>
      <a>
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
            <Score score={score} starSize={12} />
          </div>
          <div className={styles.footer}>
            <div className={styles.footer__left}>
              <p className={styles.price}>{NumberFormater.currency(price)}</p>
              {typeof percentageOff === 'number' && percentageOff !== 0 && (
                <div className={styles.discount}>
                  <span className={styles.previousPrice}>
                    {NumberFormater.currency(previousPrice as number)}
                  </span>
                  <span className={styles.percentage}>
                    {NumberFormater.percentage(percentageOff)}
                  </span>
                </div>
              )}
            </div>
            {isFavorite && <Trash onClick={() => props.deleteFavorite(id)} />}
          </div>
        </article>
      </a>
    </Link>
  );
};

const state = (reducers: any) => reducers.favoritesReducer;

export default connect(state, favoritesActions)(ProductCard);
