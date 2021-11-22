import axios from 'axios';

import { SearchResponse } from '.';

export class MercadoLivre {
  static baseUrl = 'http:localhost:5000/api';

  static async searchProducts(query: string): Promise<SearchResponse> {
    const response = await axios.get<SearchResponse>(
      `${this.baseUrl}/items?q=${query}`
    );

    return response.data;
  }
}
