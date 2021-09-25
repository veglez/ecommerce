import React from 'react';

const Button = (props: any) => {
  const text: string = props.text;
  return (
    <>
      <button>{text}</button>
      <style jsx>{`
        button {
          text-transform: capitalize;
          background-color: var(--blue);
          color: var(--white);
          padding: 16px 0;
          border: none;
          border-radius: 5px;
          outline: none;
        }
      `}</style>
    </>
  );
};

export default Button;
