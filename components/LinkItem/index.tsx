import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
const LinkItem = (props: {
  label: string;
  Comp: React.ElementType;
  active: boolean;
  route: string;
}) => {
  const { label, Comp, active, route } = props;
  const router = useRouter();

  return (
    <>
      <Link href={route}>
        <a className={styles.container}>
          <Comp className={clsx(router.route === route && styles.active)} />
          <p
            className={clsx(
              styles.label,
              router.route === route && styles.active
            )}
          >
            {label}
          </p>
        </a>
      </Link>
    </>
  );
};

export default LinkItem;
