import config from 'config';

import * as HTTP from '@src/utils/request';

import { FetchProductsResponse } from './types';

export class MercadoLivre {
  private api = config.get('App.resources.MercadoLivre.apiUrl');

  constructor(protected request = new HTTP.Request()) {}

  public async fetchProducts(query: string) {
    try {
      const url = `${this.api}/sites/MLA/search?q=${query}`;
      const response = await this.request.get<FetchProductsResponse>(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
