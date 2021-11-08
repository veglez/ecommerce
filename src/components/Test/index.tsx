import Ad from 'components/Ad';
import Category from 'components/Category';
import ProductCard from 'components/ProductCard';
import React from 'react';
import { IoAccessibility } from 'react-icons/io5';
import imagen from 'public/assets/prom02.png';
import Score from 'components/Score';
import Option from '@containers/Options';
import ReviewCard from 'components/ReviewCard';
import useFetchData from 'hooks/useFetchData';

const Test = () => {
  return (
    <div id='test'>
      <h2>This is a test component en _app</h2>
      <Score score={2.35} starSize={12} />
    </div>
  );
};

export default Test;
