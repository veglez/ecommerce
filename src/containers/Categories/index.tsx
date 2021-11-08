import React from 'react';
import Scrollable from 'components/Scrollable';
import data from './data';
import Category from 'components/Category';
import styles from './styles.module.scss';

const Categories = () => {
  const elements = data.map((x) => {
    return React.createElement(Category, x);
  });
  return (
    <section>
      <h2 className={styles.title}>Categories</h2>
      <Scrollable bullets={false} elements={elements} />
    </section>
  );
};

export default Categories;
