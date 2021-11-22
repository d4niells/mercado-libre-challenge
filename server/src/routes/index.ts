import { Router } from 'express';
import { ProductsController } from '@src/controllers/products';

const router = Router();

router.get('/items', ProductsController.search);
router.get('/items/:id', ProductsController.findById);

export { router };
