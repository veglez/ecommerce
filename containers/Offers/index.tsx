import React from 'react';
import Scrollable from 'components/Scrollable';
import data from './data';
import Banner from 'components/Banner';

const Offers = () => {
  const elements = data.map((item) => {
    return React.createElement(Banner, item);
  });
  return (
    <>
      <Scrollable elements={elements} bullets={true} />
    </>
  );
};

export default Offers;
