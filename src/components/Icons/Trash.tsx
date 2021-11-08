import * as React from 'react';

function Trash(props: any) {
  return (
    <svg
      width={24}
      height={24}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M3 6.375h18M8.625 3h6.75M18.75 6.375H5.25V21h13.5V6.375z'
        stroke='#9098B1'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export default Trash;
