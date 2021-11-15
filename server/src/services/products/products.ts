import {
  Item,
  MercadoLivre,
  FetchProductsResponse,
} from '@src/clients/mercado-livre';

import ApiError from '@src/utils/errors/api-error';

import { Author, Product, Query, SearchResponse } from './types';

export class ProductsService {
  constructor(protected mercadoLivre = new MercadoLivre()) {}

  public async search(query: Query): Promise<SearchResponse> {
    try {
      const formatedQuery = this.formatQuery(query);

      const data = await this.mercadoLivre.fetchProducts(formatedQuery);

      const author = this.getAuthor();
      const items = await this.getItems(data);

      return {
        items,
        author,
        categories: [],
      };
    } catch (error) {
      throw error;
    }
  }

  private getAuthor(): Author {
    return {
      name: 'Daniel',
      lastname: 'Oliveira',
    };
  }

  private async getItems({
    results,
  }: FetchProductsResponse): Promise<Product[]> {
    const items = await Promise.all(
      results.map(async (item): Promise<Product> => {
        const price = await this.getPrice(item);
        return {
          id: item.id,
          price: price,
          title: item.title,
          picture: item.thumbnail,
          condition: item.condition,
          free_shipping: item.shipping.free_shipping,
        };
      })
    );

    return items;
  }

  private async getPrice({
    price,
    currency_id,
  }: Item): Promise<Product['price']> {
    const data = await this.mercadoLivre.getCurrency(currency_id);

    return {
      amount: price,
      currency: data.symbol,
      decimals: data.decimal_places,
    };
  }

  private formatQuery(query: Query) {
    if (typeof query === 'undefined') {
      throw ApiError.format({
        code: 400,
        message: "Error: invalid query param 'q'",
        description: "Query param 'q' has to be of type string",
      });
    } else if (typeof query === 'string') {
      return query;
    } else {
      return query.join('+');
    }
  }
}
