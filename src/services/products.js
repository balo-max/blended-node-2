import { Product } from "../models/product.js";


export const getAllProducts = async () => {
    return await Product.find();
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