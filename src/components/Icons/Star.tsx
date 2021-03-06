import { HTMLAttributes } from 'react';
import * as React from 'react';

interface Props extends Partial<HTMLAttributes<HTMLDivElement>> {
  size: number;
  ratio: number;
}

function Star(props: Props) {
  const { size, ratio, id, ...rest } = props;
  //ratio indicates how much the star should fill its color
  // const [active, setActive] = React.useState(false);
  // const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
  //   setActive((a) => !a);
  // };

  return (
    <div id={id} {...rest}>
      <svg
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        viewBox={`0 0 ${11.8} ${10.7}`}
      >
        <path
          d='M6 0l1.996 3.253 3.71.893L9.23 7.049l.297 3.805L6 9.396l-3.527 1.458.297-3.805L.294 4.146l3.71-.893L6 0z'
          fill='#FFC833'
        />
      </svg>

      <style jsx>{`
        div {
          width: ${size}px;
          height: ${size}px;
          position: relative;
          transform: rotateY(180deg);
        }
        div:before {
          width: ${size - size * ratio}px;
          height: 100%;
          content: '';
          position: absolute;
          background-color: #0000;
          z-index: 1;
          backdrop-filter: grayscale(1);
        }
        svg {
          width: 100%;
          height: 100%;
          position: absolute;
        }
      `}</style>
    </div>
  );
}

export default Star;
