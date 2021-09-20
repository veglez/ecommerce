import { ProductItem } from 'index';
import { NextApiRequest, NextApiResponse } from 'next';

const data: ProductItem[] = [
  {
    id: 'favorite0',
    thumbnail: { src: 'https://picsum.photos/200', alt: 'product name ' },
    name: 'Nike Air Max 270 React ENG',
    score: 4.35,
    price: 238.25,
    isFavorite: true,
    previousPrice: 524.24,
    percentageOff: 24,
  },
  {
    id: 'favorite1',
    thumbnail: { src: 'https://picsum.photos/200', alt: 'product name ' },
    name: 'Nike Air Max 270 React ENG',
    score: 4.35,
    price: 238.25,
    isFavorite: true,
    previousPrice: 524.24,
    percentageOff: 24,
  },
  {
    id: 'favorite2',
    thumbnail: { src: 'https://picsum.photos/200', alt: 'product name ' },
    name: 'Nike Air Max 270 React ENG',
    score: 4.35,
    price: 238.25,
    isFavorite: true,
  },
  {
    id: 'favorite3',
    thumbnail: { src: 'https://picsum.photos/200', alt: 'product name ' },
    name: 'Nike Air Max 270 React ENG',
    score: 4.35,
    price: 238.25,
    isFavorite: true,
  },
  {
    id: 'favorite4',
    thumbnail: { src: 'https://picsum.photos/200', alt: 'product name ' },
    name: 'Nike Air Max 270 React ENG',
    score: 4.35,
    price: 238.25,
    isFavorite: true,
  },
  {
    id: 'favorite5',
    thumbnail: { src: 'https://picsum.photos/200', alt: 'product name ' },
    name: 'Nike Air Max 270 React ENG',
    score: 4.35,
    price: 238.25,
    isFavorite: true,
  },
  {
    id: 'favorite6',
    thumbnail: { src: 'https://picsum.photos/200', alt: 'product name ' },
    name: 'Nike Air Max 270 React ENG',
    score: 4.35,
    price: 238.25,
    isFavorite: true,
  },
  {
    id: 'favorite7',
    thumbnail: { src: 'https://picsum.photos/200', alt: 'product name ' },
    name: 'Nike Air Max 270 React ENG',
    score: 4.35,
    price: 238.25,
    isFavorite: true,
  },
  {
    id: 'favorite8',
    thumbnail: { src: 'https://picsum.photos/200', alt: 'product name ' },
    name: 'Nike Air Max 270 React ENG',
    score: 4.35,
    price: 238.25,
    isFavorite: true,
  },
  {
    id: 'favorite9',
    thumbnail: { src: 'https://picsum.photos/200', alt: 'product name ' },
    name: 'Nike Air Max 270 React ENG',
    score: 4.35,
    price: 238.25,
    isFavorite: true,
  },
  {
    id: 'favorite10',
    thumbnail: { src: 'https://picsum.photos/200', alt: 'product name ' },
    name: 'Nike Air Max 270 React ENG',
    score: 4.35,
    price: 238.25,
    isFavorite: true,
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(data);
}
