import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { BaseController } from '@src/controllers/baseController';

import { ProductsService, Query } from '@src/services/products';

type RequestQuery = {
  q: Query;
};

export class ProductsController extends BaseController {
  constructor() {
    super();
  }

  public async search(
    request: Request<never, never, never, RequestQuery>,
    response: Response
  ): Promise<void> {
    const { q } = request.query;

    try {
      const product = new ProductsService();
      const data = await product.search(q);

      response.status(StatusCodes.OK).send(data);
    } catch (error) {
      response.status(StatusCodes.BAD_REQUEST).send({
        code: StatusCodes.BAD_REQUEST,
        message: `Error: Unable to find products by ${q}`,
      });
    }
  }
}
