export interface User {
  id: string;
  avatar: Image;
  name: string;
  lastName: string;
  others?: {};
}

export interface Image {
  src: string | StaticImageData;
  alt: string;
  width?: number;
  height?: number;
}

//could be: size, color, shape, etc...
export interface ProductOption {
  title: string;
  options: any[];
}

export interface ProductSpecification {
  key: string;
  value: string | number;
}

export interface Review {
  id: string;
  user: User;
  score: number;
  comment: string;
  photos: Image[];
  publishedDate: string;
}

export interface ProductItem {
  id: string;
  thumbnail: Image;
  name: string;
  score: number;
  price: number;
  previousPrice?: number;
  percentageOff?: number;
  isFavorite: boolean;
}

export interface ProductDetails {
  id: string;
  item: ProductItem;
  images: Image[];
  options?: ProductOption[];
  specifications?: ProductSpecification[];
  description: string;
  reviews: Review[];
}

export interface scrollableClonedElement {
  clonedProps: {
    key: string;
    dataset: any;
    className: string;
  };
}
