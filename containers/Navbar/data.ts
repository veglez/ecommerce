import Cart from 'components/Icons/Cart';
import Offer from 'components/Icons/Offer';
import Search from 'components/Icons/Search';
import User from 'components/Icons/User';
import { NextPage } from 'next';
import React from 'react';
import Home from '../../components/Icons/Home';

const items: Array<{
  label: string;
  Comp: React.ElementType;
  active: boolean;
}> = [
  {
    label: 'Home',
    Comp: Home,
    active: true,
  },
  {
    label: 'Explore',
    Comp: Search,
    active: false,
  },
  {
    label: 'Cart',
    Comp: Cart,
    active: false,
  },
  {
    label: 'Offer',
    Comp: Offer,
    active: false,
  },
  {
    label: 'Account',
    Comp: User,
    active: false,
  },
];

export default items;
