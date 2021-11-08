import React from 'react';
import styles from './styles.module.scss';
import data from './data';
import Scrollable from 'components/Scrollable';
import ProductCard from 'components/ProductCard';

const FlashSale = () => {
  const elements = data.map((x) => React.createElement(ProductCard, x));
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Flash Sale</h2>
      <Scrollable bullets={false} elements={elements} />
    </section>
  );
};

export default FlashSale;
