export type Query = string | string[] | undefined;

export type Product = {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
};

export type Price = {
  currency: string;
  amount: number;
  decimals: number;
};

export type Author = {
  name: string;
  lastname: string;
};

export type Category = string;

export type SearchResponse = {
  author: Author;
  categories: Category[];
  items: Product[];
};
