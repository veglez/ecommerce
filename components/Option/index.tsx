import React, { useState } from 'react';
import { Store } from 'redux';

const Option = (props: any) => {
  const { optionValue } = props;
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <>
      <div onClick={handleClick}>
        <p>{optionValue}</p>
      </div>

      <style jsx>{`
        div {
          border-radius: 50%;
          border: 3px solid ${active ? 'var(--blue)' : 'var(--light)'};
          padding: 3px;
          width: 48px;
          height: 48px;
          display: grid;
          place-content: center;
        }
      `}</style>
    </>
  );
};

const stateMapToProps = (reducer: any) => reducer.optionReducer;

export default Option;
