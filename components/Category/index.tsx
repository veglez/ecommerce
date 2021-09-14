import React, { Attributes } from 'react';
import styles from './styles.module.scss';
import { categoryProps } from './types';
import { AiFillAlert } from 'react-icons/ai';

const Category = (props: categoryProps) => {
  const { icon, label, style } = props;
  return (
    <div>
      <div className={styles.icon}>
        {React.createElement(icon, {
          className: styles.element,
          style: style,
        } as Attributes)}
      </div>
      <p className={styles.label}>{label}</p>
    </div>
  );
};

export default Category;
