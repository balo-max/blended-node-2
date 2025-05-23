import { Product } from "../models/product.js";
import { calculatePaginationData } from "../utils/calculatePaginationData.js";


export const getAllProducts = async ({ page, perPage }) => {
    const limit = perPage;
    const skip = (page - 1) * perPage;

    const productsQuery = Product.find();
    const productsCount = await Product.find().merge(productsQuery).countDocuments();

    const products = await productsQuery.skip(skip).limit(limit).exec();

    const paginationData = calculatePaginationData(productsCount, page, perPage);
    
    return {
        data: products,
        ...paginationData
    };
};

export const getProductById = async (productId) => {
    return await Product.findById(productId);
};

export const postProduct = async (payload) => {
    return await Product.create(payload);
};

export const updateProduct = async (productId, payload) => {
    return await Product.findByIdAndUpdate(productId, payload, {new: true});
};

export const deleteProduct = async (productId) => {
    return await Product.findByIdAndDelete(productId);
};