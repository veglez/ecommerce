import * as React from 'react';

function Lock(props: any) {
  return (
    <svg
      width={24}
      height={24}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M2 9.75a1 1 0 011-1h18a1 1 0 011 1V21a1 1 0 01-1 1H3a1 1 0 01-1-1V9.75zm2 1V20h16v-9.25H4z'
        fill='current'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 4C9.481 4 7.375 6.132 7.375 8.841a1 1 0 01-2 0C5.375 5.099 8.306 2 12 2s6.625 3.1 6.625 6.841a1 1 0 11-2 0C16.625 6.132 14.519 4 12 4zM12 13.726a1 1 0 011 1v1.125a1 1 0 11-2 0v-1.125a1 1 0 011-1z'
        fill='current'
      />
    </svg>
  );
}

export default Lock;
