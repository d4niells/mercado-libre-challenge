import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { ProductsService, Query } from '@src/services/products';
import ApiError, { APIError } from '@src/utils/errors/api-error';

type RequestQuery = {
  q: Query;
};

type RequestParams = {
  id: string;
};

export class ProductsController {
  static async search(
    request: Request<never, never, never, RequestQuery>,
    response: Response
  ): Promise<void> {
    const { q } = request.query;

    try {
      const product = new ProductsService();
      const data = await product.search(q);

      response.status(StatusCodes.OK).send(data);
    } catch (error) {
      if (error instanceof ApiError) {
        const apiError = error as APIError;
        response.status(StatusCodes.BAD_REQUEST).send({
          code: apiError.code,
          message: apiError.message,
        });
      }

      response.status(StatusCodes.BAD_REQUEST).send({
        code: StatusCodes.BAD_REQUEST,
        message: `Error: Unable to find products by ${q}`,
      });
    }
  }

  static async findById(
    request: Request<RequestParams, never, never, never>,
    response: Response
  ) {
    const { id } = request.params;

    try {
      const product = new ProductsService();
      const data = await product.findById(id);

      response.status(StatusCodes.OK).send(data);
    } catch (error) {
      if (error instanceof ApiError) {
        const apiError = error as APIError;
        response.status(StatusCodes.BAD_REQUEST).send({
          code: apiError.code,
          message: apiError.message,
        });
      }

      response.status(StatusCodes.BAD_REQUEST).send({
        code: StatusCodes.BAD_REQUEST,
        message: `Error: Product with id: ${id} not exists`,
      });
    }
  }
}
