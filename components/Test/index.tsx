import Ad from 'components/Ad';
import Category from 'components/Category';
import ProductCard from 'components/ProductCard';
import React from 'react';
import { IoAccessibility } from 'react-icons/io5';
import imagen from 'public/assets/prom02.png';

const Test = () => {
  return (
    <div id='test'>
      <h2>This is a test component</h2>
      <Ad src={imagen} alt='some alt' />
    </div>
  );
};

export default Test;
