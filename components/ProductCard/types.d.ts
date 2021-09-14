type productCardProps = {
  image: {
    src: StaticImageData | string;
    alt: string;
  };
  title: string;
  price: string;
  previous?: string;
  percentage?: string;
  score?: number;
  others?: any;
};
