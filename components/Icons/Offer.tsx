import * as React from 'react';

function Offer(props: any) {
  return (
    <svg
      width={24}
      height={24}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M8.063 8.625a.563.563 0 100-1.125.563.563 0 000 1.125z'
        fill='#9098B1'
        stroke='#9098B1'
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M21 13l-8 8L3 11V3h8l10 10z'
        stroke='#9098B1'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export default Offer;
