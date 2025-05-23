import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        enum: ['books', 'electronics', 'clothing', 'other'],
        default: 'other',
        required: true,
    },
    description: {
        type: String,
        requireq: false,
    },
}, {
    timestamps: true,
    versionKey: false,
});

export const Product = mongoose.model("Product", productSchema);