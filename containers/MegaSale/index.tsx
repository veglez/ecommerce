import ProductCard from 'components/ProductCard';
import Scrollable from 'components/Scrollable';
import React from 'react';
import data from './data';

const MegaSale = () => {
  const elements = data.map((x) => React.createElement(ProductCard, x));
  return (
    <section>
      <h2>Mega Sale</h2>
      <Scrollable elements={elements} bullets={false} />
    </section>
  );
};

export default MegaSale;
