import useDateCooldown from 'src/hooks/useDateCooldown';
import React, { useState, useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import { CooldownProps } from './types';

const Cooldown = (props: CooldownProps) => {
  const { date } = props;
  const timeLeft = useDateCooldown(+new Date(date) / 1000);

  //timeLeft return an array with arrays[value, typeOfUnit]
  //example timeLeft = [ [2, 'minutes'], [20, 'seconds'] ]

  return (
    <div className={styles.container}>
      {timeLeft.map((unitOfTime) => {
        const unit = unitOfTime[0].toString();
        const toShow = unit.length < 2 ? `0${unit}` : unit;
        return (
          <div key={unitOfTime[1]}>
            <span className={styles.digits}>{toShow}</span>{' '}
            <b className={styles.unitName}>{unitOfTime[1]}</b>
          </div>
        );
      })}
      {/* <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span> */}
    </div>
  );
};

export default Cooldown;
