import React from 'react';
import Image from 'next/image';

interface Props {
  title: string;
  subtitle: string;
}

const WelcomeHeader: React.FC<Props> = (props) => {
  const { title, subtitle } = props;
  return (
    <>
      <header>
        <Image
          src={
            'https://res.cloudinary.com/webstatics/image/upload/v1633301656/ecommerce/logodark_armpcs.png'
          }
          width={72}
          height={72}
          className='WelcomeHeader_logo'
          alt='Lafyuu logo'
        />
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </header>
      <style jsx>{`
        :global(.WelcomeHeader_logo) {
          border-radius: 16px;
          min-width: 72px !important;
        }
        header {
          text-align: center;
        }
        h2 {
          margin: 16px 0 8px 0;
        }
        h2 + p {
          margin-block-end: 12px;
          color: var(--gray);
        }
      `}</style>
    </>
  );
};

export default WelcomeHeader;
