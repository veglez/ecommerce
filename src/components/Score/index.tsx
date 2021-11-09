import React, { HTMLAttributes, MouseEventHandler, useState } from 'react';
import Star from 'components/Icons/Star';
import styles from './styles.module.scss';
import clsx from 'clsx';

interface Props1 extends Partial<HTMLAttributes<HTMLDivElement>> {
  score: number;
  starSize?: number;
  selectable: false;
  callback?: never;
}
interface Props2 extends Partial<HTMLAttributes<HTMLDivElement>> {
  starSize?: number;
  selectable: true;
  score?: never;
  callback: (value: number) => void;
}

type Props = Props1 | Props2;

const Score = (props: Props) => {
  const {
    score,
    className,
    starSize = 16,
    selectable,
    callback,
    ...rest
  } = props;
  const els = [0, 1, 2, 3, 4];
  const [innerScore, setInnerScore] = useState(0);
  //score its always needed when selectable=true and its not needed when selectable=false
  const thisScore = selectable ? innerScore : (score as number);
  const containerClassName = 'scoreContainer';

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const starDivContainer = `.${containerClassName} div`;
    const node = e.target as HTMLDivElement;
    const closest = node.closest(starDivContainer);
    const container = node.className
      .toString()
      .includes(`${containerClassName}`);
    if (container) {
      setInnerScore(0);
    }

    if (closest && !container) {
      const value = Number(closest.id);
      setInnerScore(value + 1);
    }
  };

  React.useEffect(() => {
    callback && callback(innerScore);
  }, [innerScore, callback]);

  return (
    <div
      className={clsx(styles.container, className, containerClassName)}
      onClick={handleClick}
      {...rest}
    >
      {els.map((itemN) => {
        let innerScore = thisScore - itemN;
        return (
          <Star
            key={itemN}
            id={`${itemN}`}
            size={starSize}
            ratio={
              innerScore > 1
                ? 1
                : innerScore < 0 || isNaN(innerScore)
                ? 0
                : innerScore
            }
          />
        );
      })}
    </div>
  );
};

export default Score;
