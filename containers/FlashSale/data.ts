import tenni1 from 'public/assets/shoe00.png';
import tenni2 from 'public/assets/tennis03.png';
import bag from 'public/assets/bag02.png';
import { ProductItem } from 'index';

const data: ProductItem[] = [
  {
    id: 'flashSale0',
    name: 'FS - Nike Air Max 270 React...',
    price: 299.43,
    previousPrice: 534.33,
    percentageOff: 24,
    thumbnail: {
      src: tenni1,
      alt: 'product name',
    },
    isFavorite: false,
    score: 3.78,
  },
  {
    id: 'flashSale1',
    name: 'FS - QUILTED MAXI CROS...',
    price: 299.43,
    previousPrice: 534.33,
    percentageOff: 24,
    thumbnail: {
      src: bag,
      alt: 'product name',
    },
    isFavorite: false,
    score: 3.78,
  },
  {
    id: 'flashSale2',
    name: 'FS - Nike Air Max 270 React...',
    price: 299.43,
    previousPrice: 534.33,
    percentageOff: 24,
    thumbnail: {
      src: tenni2,
      alt: 'product name',
    },
    isFavorite: false,
    score: 3.78,
  },
];

export default data;
