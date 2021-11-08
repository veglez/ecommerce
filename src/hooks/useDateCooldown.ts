import { useEffect, useState } from 'react';

const DATE_UNITS = [
  ['Days', 60 * 60 * 24],
  ['Hours', 60 * 60],
  ['Minutes', 60],
  ['Seconds', 1],
];

type timeValues = (number | string)[][];

export function getTimeLeft(timestamp: number, times: number): timeValues {
  // console.log(`EL TIMESTAMP: ${timestamp}`);
  const timeLeft = times === 0 ? timestamp - +new Date() / 1000 : timestamp;
  let value = 0;

  for (const [unit, secondsInUnit] of DATE_UNITS) {
    if (timeLeft > secondsInUnit || unit === 'Seconds') {
      value = timeLeft / (secondsInUnit as number);
      const decimal = value - Math.floor(value);
      value = Math.floor(value);
      // console.warn(`value: ${value} ---- decimal: ${decimal}`);
      if (decimal > 0.001 && unit != 'Seconds') {
        // console.error('DICE QUE DECIMAL ES MAYOR A CERO: ', decimal);
        return [
          [value, unit],
          ...getTimeLeft(decimal * (secondsInUnit as number), times + 1),
        ];
      }
      return [[value, unit]];
    }
  }
}

export default function useDateCooldown(timestamp: number) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(timestamp, 0));

  useEffect(() => {
    let c = setInterval(() => {
      setTimeLeft(getTimeLeft(timestamp, 0));
    }, 1000);
    return () => {
      clearInterval(c);
    };
  }, [timeLeft, timestamp]);

  return timeLeft;
}
