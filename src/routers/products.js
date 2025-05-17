import { Router } from "express";
import express from 'express';
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { deleteProductController, getAllProductsController, getProductByIdController, postProductController, updateProductController } from "../controllers/products.js";


const router = Router();
const jsonParser = express.json();

router.get('/products', ctrlWrapper(getAllProductsController));

router.get('/products/:productId', ctrlWrapper(getProductByIdController));

router.post('/products', jsonParser,  ctrlWrapper(postProductController));

router.patch('/products/:productId', jsonParser, ctrlWrapper(updateProductController));

router.delete('/products/:productId', ctrlWrapper(deleteProductController));

export default router;