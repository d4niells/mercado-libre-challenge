import config from 'config';

import * as HTTP from '@src/utils/request';

import {
  CurrencyResponse,
  ProductsResponse,
  CategoryResponse,
  FindUserResponse,
} from './types';

export class MercadoLivre {
  private api = config.get('App.resources.MercadoLivre.apiUrl');

  constructor(protected request = new HTTP.Request()) {}

  public async fetchProducts(query: string) {
    try {
      const url = `${this.api}/sites/MLA/search?q=${query}`;
      const response = await this.request.get<ProductsResponse>(url);
      return response.data.results;
    } catch (error) {
      throw error;
    }
  }

  public async getCurrency(currencyId: string) {
    try {
      const url = `${this.api}/currencies/${currencyId}`;
      const response = await this.request.get<CurrencyResponse>(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async findCategoryById(id: string) {
    try {
      const url = `${this.api}/categories/${id}`;
      const response = await this.request.get<CategoryResponse>(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async findUserById(id: number) {
    try {
      const url = `${this.api}/users/${id}`;
      const response = await this.request.get<FindUserResponse>(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
