import bag3 from 'public/assets/bag03.png';
import bag1 from 'public/assets/bag01.png';
import tennis from 'public/assets/tennis02.png';
import { ProductItem } from 'index';

const data: ProductItem[] = [
  {
    id: 'megaSale0',
    thumbnail: {
      src: bag3,
      alt: 'thumbnail name',
    },
    name: 'MS - Nike Air Max 270 React...',
    price: 299.43,
    previousPrice: 534.33,
    percentageOff: 24,
    isFavorite: false,
    score: 4.8,
  },
  {
    id: 'megaSale1',
    thumbnail: {
      src: tennis,
      alt: 'thumbnail name',
    },
    name: 'MS - Nike Air Max 270 React...',
    price: 299.43,
    previousPrice: 534.33,
    percentageOff: 24,
    isFavorite: false,
    score: 4.8,
  },
  {
    id: 'megaSale2',
    thumbnail: {
      src: bag1,
      alt: 'thumbnail name',
    },
    name: 'MS - Nike Air Max 270 React...',
    price: 299.43,
    previousPrice: 534.33,
    percentageOff: 24,
    isFavorite: false,
    score: 4.8,
  },
];

export default data;
