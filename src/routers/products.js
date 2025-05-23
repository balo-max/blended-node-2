import { Router } from "express";
import express from 'express';
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { deleteProductController, getAllProductsController, getProductByIdController, postProductController, updateProductController } from "../controllers/products.js";
import { validateBody } from "../middlewares/validateBody.js";
import { createProductSchema, updateProductSchema } from "../validation/products.js";
import { isValidId } from "../middlewares/isValidId.js";


const router = Router();
const jsonParser = express.json();

router.get('/products', ctrlWrapper(getAllProductsController));

router.get('/products/:productId', isValidId, ctrlWrapper(getProductByIdController));

router.post('/products', jsonParser, validateBody(createProductSchema),  ctrlWrapper(postProductController));

router.patch('/products/:productId', jsonParser, isValidId, validateBody(updateProductSchema), ctrlWrapper(updateProductController));

router.delete('/products/:productId', isValidId, ctrlWrapper(deleteProductController));

export default router;