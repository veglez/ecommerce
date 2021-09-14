import React from 'react';
import Star from 'components/Icons/Star';
import styles from './styles.module.scss';

const index = (props: any) => {
  const { score, starSize } = props;
  const els = [0, 1, 2, 3, 4];

  return (
    <div className={styles.container}>
      {els.map((itemN) => {
        let innerScore = score - itemN;
        return (
          <Star
            key={itemN}
            size={starSize}
            ratio={
              innerScore > 1
                ? 1
                : innerScore < 0 || isNaN(score)
                ? 0
                : innerScore
            }
          />
        );
      })}
    </div>
  );
};

export default index;
