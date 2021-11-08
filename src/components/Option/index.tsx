import React from 'react';

const Option = (props: any) => {
  const { val } = props;
  return (
    <>
      <p>{val}</p>

      <style jsx>{`
        p {
          border: 1px solid var(--gray);
          border-radius: 50%;
          width: 48px;
          height: 48px;
          text-align: center;
          line-height: 48px;
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export default Option;
