import * as React from 'react';

function Love(props: any) {
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
        d='M4.545 12.775L12 20.063l7.455-7.288.04-.039a5.068 5.068 0 000-7.288c-2.06-2.013-5.395-2.014-7.455 0l-.04.04-.041-.04c-2.06-2.015-5.395-2.015-7.455 0a5.069 5.069 0 000 7.287l.04.04z'
        stroke='#9098B1'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export default Love;
