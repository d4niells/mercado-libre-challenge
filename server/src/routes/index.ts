import { Router } from 'express';
import { ProductsController } from '@src/controllers/products';

const router = Router();

const product = new ProductsController();

router.get('/items', product.search);
router.get('/items/:id', product.findById);

export { router };
