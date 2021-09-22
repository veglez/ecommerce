import React, { useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import Cooldown from 'components/Cooldown';
import styles from './styles.module.scss';
import { Bannerprops } from './types';
import imageoffer from 'public/assets/prom01.png';

const Banner = React.forwardRef<HTMLAreaElement, Bannerprops>(function Banner(
  props: Bannerprops,
  ref2
) {
  const { title, offer, timer, className, number, clonedProps } = props;
  return (
    <article
      ref={ref2}
      {...clonedProps}
      className={clsx(styles.container, className)}
    >
      <Image src={imageoffer} alt={'offer'} layout={'fill'} />
      <div className={styles.content}>
        <h2>{title}</h2>
        <p>{offer}</p>
        <Cooldown {...timer} />
      </div>
    </article>
  );
});

export default Banner;
