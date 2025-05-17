import createHttpError from "http-errors";
import { deleteProduct, getAllProducts, getProductById, postProduct, updateProduct } from "../services/products.js";
import { validateObjectId } from "../utils/validateObjectId.js";


export const getAllProductsController = async (req, res) => {
    const products = await getAllProducts();

    res.status(200).json({
        status: 200,
        message: 'Successfully found products!',
        data: products,
    });
};

export const getProductByIdController = async (req, res) => {
    const { productId } = req.params;

    validateObjectId(productId, 'Product');

    const product = await getProductById(productId);

    if (!product) {
        throw new createHttpError(404, 'Product not found!');
    }

    res.status(200).json({
        status: 200,
        message: `Successfully found product with id ${productId}!`,
        data: product,
    });
};

export const postProductController = async (req, res) => {
    const newProduct = await postProduct(req.body);

    res.status(201).json({
        status: 201,
        message: `Successfully created a contact ${req.body.name}!`,
        data: newProduct,
    });
};

export const updateProductController = async (req, res) => {
    const { productId } = req.params;
    validateObjectId(productId, 'Product');

    const result = await updateProduct(productId, req.body);

    if (!result) {
        throw new createHttpError(404, 'Product not found!');
    }

    res.status(200).json({
        status: 200,
        message: 'Successfully patched a product!',
        data: result,
    });
};

export const deleteProductController = async (req, res) => {
    const { productId } = req.params;
    validateObjectId(productId, 'Product');

    const product = await deleteProduct(productId);

    if (!product) {
        throw new createHttpError(404, 'Product not found');
    }

    res.sendStatus(204);
};