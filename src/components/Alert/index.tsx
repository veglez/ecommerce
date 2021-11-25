import React from 'react';
import style from './styles.module.scss';

interface Props {
  type: 'Danger' | 'Alert' | 'Success';
}

const Alert: React.FC<Props> = (props) => {
  const { children, type } = props;

  return (
    <>
      <p className={style[type]}>{children}</p>
    </>
  );
};

export default Alert;
