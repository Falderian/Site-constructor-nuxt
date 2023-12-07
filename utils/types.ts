type TSiteOptions = {
  header: string;
  body?: string;
  content?: string;
  footer: string;
};

type TCarouselConfig = {
  bkgImage: string;
  content: {
    subheading: string;
    heading: string;
    description: string;
    btnText: string;
  };
};

type TCard = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type { TSiteOptions, TCarouselConfig, TCard };
