import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import styles from './styles.module.scss';

const LinkItem = (props: {
  label: string;
  Comp: React.ElementType;
  active: boolean;
}) => {
  const { label, Comp, active } = props;

  return (
    <>
      <div className={styles.container}>
        {/* <Image
          className={styles.active}
          alt={`${label} icon`}
          Comp={Comp}
          width={24}
          height={24}
        /> */}
        {<Comp className={clsx(active && styles.active)} />}
        <p className={clsx(styles.label, active && styles.active)}>{label}</p>
      </div>
    </>
  );
};

export default LinkItem;
