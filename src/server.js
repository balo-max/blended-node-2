import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import { getEnvVar } from './utils/getEnvVar.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import productRouters from './routers/products.js';

const PORT = Number(getEnvVar('PORT', '3000'));

export const setupServer = () => {
    const app = express();

    app.use(cors());

    app.use(
        pino({
            transport: {
                target: 'pino-pretty',
            },
        }),
    );

    app.use(productRouters);

    app.use(notFoundHandler);
    
    app.use(errorHandler);
    
    app.listen(PORT, (error) => {
        if (error) throw error;

        console.log(`Server started on port ${PORT}`);
    });
};