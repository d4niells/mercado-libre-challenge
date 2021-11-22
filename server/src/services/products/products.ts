import { Item, MercadoLivre } from '@src/clients/mercado-livre';

import ApiError from '@src/utils/errors/api-error';
import { getPartialName } from '@src/utils/get-name';

import {
  Author,
  Product,
  Query,
  SearchResponse,
  FindItemResponse,
} from './types';

export class ProductsService {
  constructor(protected mercadoLivre = new MercadoLivre()) {}

  public async search(query: Query): Promise<unknown> {
    try {
      const formatedQuery = this.formatQuery(query);

      const mlResults = await this.mercadoLivre.fetchProducts(formatedQuery);

      const hashMapOfItemsByAuthor = await this.getItemsByAuthor(mlResults);

      return [...hashMapOfItemsByAuthor.values()];
    } catch (error) {
      throw error;
    }
  }

  public async findById(id: string): Promise<FindItemResponse> {
    try {
      const itemPromise = await this.mercadoLivre.findItemById(id);
      const descriptionPromise = this.mercadoLivre.findItemDescriptionById(id);

      const [item, itemDescription] = await Promise.all([
        itemPromise,
        descriptionPromise,
      ]);

      const authorPromise = this.getAuthor(item.seller_id);
      const productPromise = this.convertItemToProduct(item as unknown as Item);

      const [author, product] = await Promise.all([
        authorPromise,
        productPromise,
      ]);

      return {
        author,
        item: { ...product, description: itemDescription.plain_text },
      };
    } catch (error) {
      throw error;
    }
  }

  private async getItemsByAuthor(mlResults: Item[]) {
    const dataByAuthor = new Map<number, SearchResponse>();

    for (const item of mlResults) {
      const hasCurrentAuthor = dataByAuthor.has(item.seller.id);

      if (hasCurrentAuthor) {
        const { items, ...rest } = dataByAuthor.get(
          item.seller.id
        ) as SearchResponse;

        const exists = items.some((current) => current.id === item.id);

        if (!exists) {
          const product = await this.convertItemToProduct(item);

          dataByAuthor.set(item.seller.id, {
            ...rest,
            items: [...items, product],
          });
        }
      } else {
        const authorPromise = this.getAuthor(item.seller.id);
        const productPromise = this.convertItemToProduct(item);
        const categoriesPromise = this.getCategories(item.category_id);

        const [author, product, categories] = await Promise.all([
          authorPromise,
          productPromise,
          categoriesPromise,
        ]);

        dataByAuthor.set(item.seller.id, {
          author,
          categories,
          items: [product],
        });
      }
    }

    return dataByAuthor;
  }

  private async convertItemToProduct(item: Item): Promise<Product> {
    const price = await this.getPrice(item);
    return {
      id: item.id,
      price: price,
      title: item.title,
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
    };
  }

  private async getAuthor(sellerId: number): Promise<Author> {
    const user = await this.mercadoLivre.findUserById(sellerId);
    return getPartialName(user.nickname);
  }

  private async getCategories(categoryId: string) {
    const data = await this.mercadoLivre.findCategoryById(categoryId);
    const categories = data.path_from_root.map((category) => category.name);
    return categories;
  }

  private async getPrice({
    price,
    currency_id,
  }: Item): Promise<Product['price']> {
    const data = await this.mercadoLivre.getCurrency(currency_id);

    return {
      amount: price,
      currency: data.id,
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
