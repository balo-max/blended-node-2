import Joi from 'joi';

export const createProductSchema = Joi.object({
    name: Joi.string().min(3).max(30).required().messages({
        'string.base': 'Name must be a text string',
        'string.empty': 'Name cannot be empty',
        'string.min': 'Name must be at least 3 characters long',
        'string.max': 'Name must not exceed 30 characters',
        'any.required': 'Name is required',
    }),
    price: Joi.number().positive().precision(2).required().messages({
        'number.base': 'Price must be a number',
        'number.positive': 'Price must be a positive value',
        'number.precision': 'Price can have at most 2 decimal places',
        'any.required': 'Price is required',
    }),
    category: Joi.string().valid('books', 'electronics', 'clothing', 'other').required().messages({
        'string.base': 'Category must be a text string',
        'any.only': 'Category must be one of: books, electronics, clothing, other',
        'any.required': 'Category is required',
    }),
    description: Joi.string().min(10).max(500).messages({
        'string.base': 'Description must be a text string',
        'string.min': 'Description must be at least 10 characters long',
        'string.max': 'Description must be no longer than 500 characters.',
    }),
});

export const updateProductSchema = Joi.object({
    name: Joi.string().min(3).max(30).messages({
        'string.base': 'Name must be a text string',
        'string.min': 'Name must be at least 3 characters long',
        'string.max': 'Name must not exceed 30 characters',
    }),
    price: Joi.number().positive().precision(2).messages({
        'number.base': 'Price must be a number',
        'number.positive': 'Price must be a positive value',
        'number.precision': 'Price can have at most 2 decimal places',
    }),
    category: Joi.string().valid('books', 'electronics', 'clothing', 'other').messages({
        'string.base': 'Category must be a text string',
        'any.only': 'Category must be one of: books, electronics, clothing, other',
    }),
    description: Joi.string().min(10).max(500).messages({
        'string.base': 'Description must be a text string',
        'string.min': 'Description must be at least 10 characters long',
        'string.max': 'Description must be no longer than 500 characters.',
    }),
});