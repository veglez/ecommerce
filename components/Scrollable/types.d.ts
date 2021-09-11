import { ReactElement } from 'react';

export type scrollableProps = {
  elements: ReactElement[];
  className?: CSSStyleDeclaration | string;
  others?: any;
  bullets: boolean;
};
