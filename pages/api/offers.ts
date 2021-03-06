// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Bannerprops } from 'components/Banner/types';
import type { NextApiRequest, NextApiResponse } from 'next';

const banners: Bannerprops[] = [
  {
    src: 'https://res.cloudinary.com/webstatics/image/upload/v1633301658/ecommerce/prom01_kdcigs.png',
    title: 'Super flash sale',
    offer: '50% off',
    timer: { date: 'November 24, 2021 18:00:00' },
  },
  {
    src: 'https://res.cloudinary.com/webstatics/image/upload/v1633301658/ecommerce/prom01_kdcigs.png',
    title: 'super flash sale',
    offer: '50% off',
    timer: { date: 'December 31, 2021 23:59:59' },
  },
  {
    src: 'https://res.cloudinary.com/webstatics/image/upload/v1633301658/ecommerce/prom01_kdcigs.png',
    title: 'super flash sale',
    offer: '50% off',
    timer: { date: 'Feb 17, 2022 12:00:00' },
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Bannerprops[]>
) {
  res.status(200).json(banners);
}
