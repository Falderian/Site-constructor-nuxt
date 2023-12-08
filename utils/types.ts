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

export interface ICard {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
}

export interface Category {
  id: number;
  name: string;
  image: string;
}

export type { TSiteOptions, TCarouselConfig, ICard };
