export type Item = {
  id: string;
  price: number;
  currency_id: string;
  title: string;
  picture: string;
  condition: string;
  thumbnail: string;
  shipping: {
    free_shipping: boolean;
  };
};

export type FetchProductsResponse = {
  results: Item[];
};

export type GetCurrencyResponse = {
  id: string;
  symbol: string;
  description: string;
  decimal_places: number;
};
