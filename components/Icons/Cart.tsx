import * as React from 'react';

function Cart(props: any) {
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
        d='M9.188 21a.562.562 0 100-1.125.562.562 0 000 1.125zM17.063 21a.562.562 0 100-1.125.562.562 0 000 1.125z'
        fill='#9098B1'
        stroke='#9098B1'
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M3 3h2.25L7.5 16.5h11.25L21 6.375H6.375'
        stroke='#9098B1'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export default Cart;
