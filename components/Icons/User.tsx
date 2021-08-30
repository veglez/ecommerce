import * as React from 'react';

function User(props: any) {
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
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 4a2.902 2.902 0 100 5.805 2.902 2.902 0 000-5.804zM7.098 6.904a4.902 4.902 0 119.804 0 4.902 4.902 0 01-9.804 0zM9.518 15.39A5.518 5.518 0 004 20.908V21a1 1 0 11-2 0v-.09a7.518 7.518 0 017.518-7.519h4.964A7.518 7.518 0 0122 20.908V21a1 1 0 11-2 0v-.09a5.518 5.518 0 00-5.518-5.519H9.518z'
        fill='#9098B1'
      />
    </svg>
  );
}

export default User;
