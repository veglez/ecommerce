import LinkItem from 'components/LinkItem';
import React, { Key } from 'react';
import items from './data';

const Navbar = () => {
  return (
    <>
      <nav>
        {items.map((item) => (
          <LinkItem key={item as unknown as Key} {...item} />
        ))}
      </nav>
      <style jsx>
        {`
          nav {
            display: flex;
            width: 100%;
            align-items: center;
            justify-content: space-around;
            gap: 20px;
          }
        `}
      </style>
    </>
  );
};

export default Navbar;
