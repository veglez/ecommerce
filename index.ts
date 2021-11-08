export interface User {
  id: string;
  avatar: Image;
  username: string;
  email: string;
  role: string;
  profile: string;
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
  values: any[];
}

export interface ProductSpecification {
  key: string;
  value: string | number;
}

export interface paginator<T> {
  hasNext: boolean;
  hasPrev: boolean;
  page: number;
  docsPerPage: number;
  totalDocs: number;
  data: T[];
  next: null | string;
  prev: null | string;
}
export interface fetchedData<T> {
  loading: boolean;
  error: string | null;
  data: null | T;
}

//it just get the keyof one for selection and sortBy
//i need for selection something like: 'id name' but i only use one
//and for sortBy i need something like 'created price' or '-created price'
//for ascending and descending sort
export interface query<T> {
  page?: number;
  limit?: number;
  sortBy?: keyof T;
  populate?: string;
  selection?: keyof T;
}

export interface Review {
  id: string;
  user: User;
  product: string; //represents the Id for the product
  score: number;
  opinion: string;
  images: Image[];
  published: string;
}

export interface ProductItem {
  id: string;
  thumbnail: Image;
  name: string;
  score: number;
  price: number;
  previousPrice?: number;
  percentageOff: number;
  // isFavorite: boolean;
  images: Image[];
  options: ProductOption[];
  specifications: ProductSpecification[];
  description: string;
}

export interface scrollableClonedElement {
  clonedProps: {
    key: string;
    dataset: any;
    className: string;
  };
}

export interface errorResponse {
  message: string;
  err: string;
}
