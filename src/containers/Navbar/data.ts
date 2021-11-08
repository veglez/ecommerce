import React, { ReactElement, ReactNode } from 'react';
import Cart from 'components/Icons/Cart';
import Offer from 'components/Icons/Offer';
import Search from 'components/Icons/Search';
import User from 'components/Icons/User';
import Home from 'components/Icons/Home';

const items: Array<{
  label: string;
  Comp: ReactNode;
  active: boolean;
  route: string;
}> = [
  {
    label: 'Home',
    Comp: Home,
    active: true,
    route: '/',
  },
  {
    label: 'Explore',
    Comp: Search,
    active: false,
    route: '/explore',
  },
  {
    label: 'Cart',
    Comp: Cart,
    active: false,
    route: '/cart',
  },
  {
    label: 'Offer',
    Comp: Offer,
    active: false,
    route: '/offer',
  },
  {
    label: 'Account',
    Comp: User,
    active: false,
    route: '/account',
  },
];

export default items;
