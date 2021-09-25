import React, { useState } from 'react';
import { Store } from 'redux';

const Option = (props: any) => {
  const { value } = props;
  const [active, setActive] = useState(false);
  const color = typeof value === 'string' && value.includes('var') && value;

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <>
      <div onClick={handleClick}>
        <p>{color ? '' : value}</p>
      </div>

      <style jsx>{`
        div {
          border-radius: 50%;
          position: relative;
          padding: 3px;
          width: 48px;
          min-width: 48px;
          height: 48px;
          min-height: 48px;
          display: grid;
          place-content: center;
          ${
            color
              ? `background-color: ${color};`
              : `border: 3px solid ${active ? 'var(--blue)' : 'var(--light)'};`
          }
        }
        div::before {
          content: '';
        ${
          color &&
          `position: absolute;
          width: 33%;
          height: 33%;
          background-color: ${active && `var(--white)`};
          z-index: 1;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
        }`
        }
      `}</style>
    </>
  );
};

const stateMapToProps = (reducer: any) => reducer.optionReducer;

export default Option;
