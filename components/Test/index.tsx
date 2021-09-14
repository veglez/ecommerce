import Ad from 'components/Ad';
import Category from 'components/Category';
import ProductCard from 'components/ProductCard';
import React from 'react';
import { IoAccessibility } from 'react-icons/io5';
import imagen from 'public/assets/prom02.png';
import Score from 'components/Score';

const Test = () => {
  return (
    <div id='test'>
      <h2>This is a test component</h2>
      <Score score={2.35} starSize={12} />
    </div>
  );
};

export default Test;
