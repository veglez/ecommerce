import * as React from 'react';

function Search(props: any) {
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
        d='M10.875 18.75a7.875 7.875 0 100-15.75 7.875 7.875 0 000 15.75z'
        stroke='#9098B1'
        strokeWidth={2}
        strokeMiterlimit={10}
      />
      <path
        d='M16.5 16.5L21 21'
        stroke='#9098B1'
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap='round'
      />
    </svg>
  );
}

export default Search;
