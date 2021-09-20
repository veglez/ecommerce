import { NextApiRequest, NextApiResponse } from 'next';
import Image from 'next/image';

interface Review {
  id: string;
  user: string;
  review: string;
  score: number;
  photos: string[];
  publicationDate: string;
}

interface Item {
  id: string;
  name: string;
  price: number;
  score: number;
  description: string;
  images: string[];
  reviews: Review[];
  isFavorite: boolean;
}

const item0: Item = {
  id: 'specialItem',
  description:
    'The Nike Air Max 270 React ENG combines a full-length React foam midsole with a 270 Max Air unit for unrivaled comfort and a striking visual experience.',
  isFavorite: true,
  price: 299.43,
  name: 'Nike Air Zoom Pegasus 36 Miami',
  score: 4,
  reviews: [
    {
      id: 'review 1',
      publicationDate: 'December 10, 2016',
      review:
        'air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.',
      score: 4.2,
      user: 'James Lawson',
      photos: ['https:/picsum.photos/150', 'https:/picsum.photos/150', 'https:/picsum.photos/150']
    },

  ],
  images: 
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  console.log("Request.id: ", id)
  res.status(200).json(item0);
}
