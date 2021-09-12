import { FunctionComponent, ReactNode } from 'react';

export type categoryProps = {
  icon: FunctionComponent | string;
  label: string;
  style?: string;
  others?: any;
};
