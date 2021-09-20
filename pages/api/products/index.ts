import { ProductItem } from 'index';
import { NextApiRequest, NextApiResponse } from 'next';

const data: ProductItem[] = [
  {
    id: 'homeProduct0',
    thumbnail: { src: 'https://picsum.photos/200', alt: 'product name ' },
    name: 'Nike Air Max 270 React ENG',
    score: 4.35,
    price: 238.25,
    isFavorite: false,
  },
  {
    id: 'homeProduct1',
    thumbnail: { src: 'https://picsum.photos/200', alt: 'product name ' },
    name: 'Nike Air Max 270 React ENG',
    score: 4.35,
    price: 238.25,
    isFavorite: false,
  },
  {
    id: 'homeProduct2',
    thumbnail: { src: 'https://picsum.photos/200', alt: 'product name ' },
    name: 'Nike Air Max 270 React ENG',
    score: 4.35,
    price: 238.25,
    isFavorite: false,
  },
  {
    id: 'homeProduct3',
    thumbnail: { src: 'https://picsum.photos/200', alt: 'product name ' },
    name: 'Nike Air Max 270 React ENG',
    score: 4.35,
    price: 238.25,
    isFavorite: false,
  },
  {
    id: 'homeProduct4',
    thumbnail: { src: 'https://picsum.photos/200', alt: 'product name ' },
    name: 'Nike Air Max 270 React ENG',
    score: 4.35,
    price: 238.25,
    isFavorite: false,
  },
  {
    id: 'homeProduct5',
    thumbnail: { src: 'https://picsum.photos/200', alt: 'product name ' },
    name: 'Nike Air Max 270 React ENG',
    score: 4.35,
    price: 238.25,
    isFavorite: false,
  },
  {
    id: 'homeProduct6',
    thumbnail: { src: 'https://picsum.photos/200', alt: 'product name ' },
    name: 'Nike Air Max 270 React ENG',
    score: 4.35,
    price: 238.25,
    isFavorite: false,
  },
  {
    id: 'homeProduct7',
    thumbnail: { src: 'https://picsum.photos/200', alt: 'product name ' },
    name: 'Nike Air Max 270 React ENG',
    score: 4.35,
    price: 238.25,
    isFavorite: false,
  },
  {
    id: 'homeProduct8',
    thumbnail: { src: 'https://picsum.photos/200', alt: 'product name ' },
    name: 'Nike Air Max 270 React ENG',
    score: 4.35,
    price: 238.25,
    isFavorite: false,
  },
  {
    id: 'homeProduct9',
    thumbnail: { src: 'https://picsum.photos/200', alt: 'product name ' },
    name: 'Nike Air Max 270 React ENG',
    score: 4.35,
    price: 238.25,
    isFavorite: false,
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(data);
}
