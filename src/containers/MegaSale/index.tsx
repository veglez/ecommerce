import ProductCard from 'components/ProductCard';
import Scrollable from 'components/Scrollable';
import React from 'react';
import styles from './styles.module.scss';
import data from './data';

const MegaSale = () => {
  const elements = data.map((x) => React.createElement(ProductCard, x));
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Mega Sale</h2>
      <Scrollable elements={elements} bullets={false} />
    </section>
  );
};

export default MegaSale;
