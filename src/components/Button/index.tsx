import { ButtonHTMLAttributes } from 'hoist-non-react-statics/node_modules/@types/react';
import React from 'react';

interface Props {
  text: string;
}

const Button: React.FC<Props & ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  const { text, ...rest } = props;
  return (
    <>
      <button {...rest}>{text}</button>
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
