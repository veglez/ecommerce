import React from 'react';

const Spinner = () => {
  return (
    <>
      <div className='container'>
        <div id='1'></div>
        <div id='2'></div>
        <div id='3'></div>
        <div id='4'></div>
        <div id='5'></div>
        <div id='6'></div>
        <div id='7'></div>
        <div id='8'></div>
        <div id='9'></div>
      </div>

      <style jsx>{`
        div {
          width: 10px;
          heigth: 10px;
          background-color: crimson;
          border: 1px solid crimson;
        }

        div.container {
          width: auto;
          height: auto;
          display: flex;
          gap: 6px;
        }
      `}</style>
    </>
  );
};

export default Spinner;
