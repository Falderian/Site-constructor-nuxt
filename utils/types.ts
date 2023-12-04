type TSiteOptions = {
  header: string;
  body: string;
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

export type { TSiteOptions, TCarouselConfig };
