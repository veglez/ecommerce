import { Image } from 'index';
import React from 'react';

interface Props {
  images: Image[];
}

const ProductImages: React.FC<Props> = (props) => {
  const { images } = props;
  return <div></div>;
};

export default ProductImages;
