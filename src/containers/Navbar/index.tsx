import LinkItem from 'components/LinkItem';
import React from 'react';
import items from './data';

const Navbar = () => {
  return (
    <>
      <nav>
        {items.map((item) => (
          <LinkItem key={item.route} {...item} />
        ))}
      </nav>
      <style jsx>
        {`
          nav {
            display: flex;
            width: 100vw;
            align-items: center;
            justify-content: space-around;
            gap: 20px;
            position: sticky;
            bottom: 0;
            background: #fff9;
            backdrop-filter: blur(15px);
          }
        `}
      </style>
    </>
  );
};

export default Navbar;
