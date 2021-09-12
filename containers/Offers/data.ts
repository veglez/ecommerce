import { Bannerprops } from 'components/Banner/types';

const banners: Bannerprops[] = [
  {
    title: 'Super flash sale',
    offer: '50% off',
    timer: { date: 'October 14, 2021 18:00:00' },
  },
  {
    title: 'super flash sale',
    offer: '50% off',
    timer: { date: 'December 31, 2021 23:59:59' },
  },
  {
    title: 'super flash sale',
    offer: '50% off',
    timer: { date: 'Feb 17, 2022 12:00:00' },
  },
];

export default banners;
// <div className={styles.offers}>
//         <Scrollable
//           className={styles.banners1}
//           elements={[
//             <Banner
//               // className={styles.offer}
//               key={'super1'}
//               title={'super flash sale'}
//               offer={'50% off'}
//               timer={{ date: 'October 14, 2021 18:00:00' }}
//             />,
//             <Banner
//               // className={styles.offer}
//               key={'super2'}
//               title={'super flash sale'}
//               offer={'50% off'}
//               timer={{ date: 'December 31, 2021 23:59:59' }}
//             />,
//             <Banner
//               // className={styles.offer}
//               key={'super3'}
//               title={'super flash sale'}
//               offer={'50% off'}
//               timer={{ date: 'Feb 17, 2022 12:00:00' }}
//             />,
//           ]}
//         />
//       </div>
