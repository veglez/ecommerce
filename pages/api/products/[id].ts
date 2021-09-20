import { ProductDetails } from 'index';
import { NextApiRequest, NextApiResponse } from 'next';

const item0: ProductDetails = {
  id: 'specialItem',
  description:
    'The Nike Air Max 270 React ENG combines a full-length React foam midsole with a 270 Max Air unit for unrivaled comfort and a striking visual experience.',
  item: {
    id: 'selected item id',
    thumbnail: {
      src: 'https://picsum.photos/150',
      alt: 'selected item picture',
    },
    isFavorite: true,
    price: 299.43,
    name: 'Nike Air Zoom Pegasus 36 Miami',
    score: 4,
  },
  reviews: [
    {
      id: 'review 1',
      publishedDate: 'December 10, 2016',
      comment:
        'air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.',
      score: 4.2,
      user: {
        name: 'James',
        id: 'user0',
        lastName: 'Lawson',
        avatar: { src: 'https://picsum.photos/100', alt: 'avatar user 0' },
      },
      photos: [
        {
          src: 'https:/picsum.photos/150',
          alt: 'photo 0 from user 0',
        },
        {
          src: 'https:/picsum.photos/150',
          alt: 'photo 1 from user 0',
        },
        {
          src: 'https:/picsum.photos/150',
          alt: 'photo 2 from user 0',
        },
      ],
    },
  ],
  images: [
    { src: 'https://picsum.photos/120', alt: 'item picture 1' },
    { src: 'https://picsum.photos/120', alt: 'item picture 1' },
    { src: 'https://picsum.photos/120', alt: 'item picture 1' },
  ],
  options: [
    {
      title: 'select size',
      options: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
    },
    {
      title: 'select color',
      options: [
        'var(--yellow)',
        'var(--blue)',
        'var(--red)',
        'var(--green)',
        'var(--purple)',
        'var(--dark)',
      ],
    },
  ],
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  console.log('Request.id: ', id);
  res.status(200).json(item0);
}
