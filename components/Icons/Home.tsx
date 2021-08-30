import * as React from 'react';

function Home(props: any) {
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
        d='M3 9.75L12 3l9 6.75M21 9.75V21H3V9.75'
        stroke='#9098B1'
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M14.25 14.25h-4.5V21h4.5v-6.75z'
        stroke='#9098B1'
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export default Home;
