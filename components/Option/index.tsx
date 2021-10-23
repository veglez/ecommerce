import React, { useState } from 'react';
import { Store } from 'redux';

const Option = (props: any) => {
  const { header, values } = props;

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <>
      <article>
        <h3>{header}</h3>
        <div className='body'>
          {values.map((val) => (
            <p key={val}>{val}</p>
          ))}
        </div>
      </article>
      <style jsx>{`
        article {
          border: 1px solid crimson;
        }
        .body {
          display: flex;
        }

        .body p {
          border-radius: 50%;
        }
      `}</style>
    </>
  );
};

const stateMapToProps = (reducer: any) => reducer.optionReducer;

export default Option;
