import { NextApiRequest, NextApiResponse } from 'next';

const data: productCardProps[] = [
  {
    image: { src: 'https://picsum.photos/200', alt: 'product name ' },
    title: 'Nike Air Max 270 React ENG',
    score: 4.35,
    price: '$238.25',
    erase: true,
    previous: '$524.24',
    percentage: '24% off',
  },
  {
    image: { src: 'https://picsum.photos/200', alt: 'product name ' },
    title: 'Nike Air Max 270 React ENG',
    score: 4.35,
    price: '238.25',
    erase: true,
  },
  {
    image: { src: 'https://picsum.photos/200', alt: 'product name ' },
    title: 'Nike Air Max 270 React ENG',
    score: 4.35,
    price: '238.25',
  },
  {
    image: { src: 'https://picsum.photos/200', alt: 'product name ' },
    title: 'Nike Air Max 270 React ENG',
    score: 4.35,
    price: '238.25',
  },
  {
    image: { src: 'https://picsum.photos/200', alt: 'product name ' },
    title: 'Nike Air Max 270 React ENG',
    score: 4.35,
    price: '238.25',
  },
  {
    image: { src: 'https://picsum.photos/200', alt: 'product name ' },
    title: 'Nike Air Max 270 React ENG',
    score: 4.35,
    price: '238.25',
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(data);
}
