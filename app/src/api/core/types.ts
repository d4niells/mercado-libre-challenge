export type Product = {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
};

export type ProductDetail = Product & {
  description: string;
  sold_quantity: number;
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

export type SearchResponse = {
  author: Author;
  categories: string[];
  items: Product[];
};

export type GetProductResponse = {
  author: Author;
  item: ProductDetail;
};
