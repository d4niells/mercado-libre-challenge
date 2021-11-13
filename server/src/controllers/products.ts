import { Request, Response } from 'express';

export class ProductsController {
  constructor() {}

  public search(request: Request, response: Response) {
    return response.status(200).send({
      message: 'search products',
    });
  }

  public findById(request: Request, response: Response) {
    return response.status(200).send({
      message: 'find product by id',
    });
  }
}
