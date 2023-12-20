import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import { notFound, errorHandler } from './middlewawre/errorMiddleware.js';

const port = process.env.port || 5000;

connectDB(); // connect to database

const app = express();// initialize express

app.get('/', (req, res) => {
    res.send('API is running..');
});

app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log('server running on 5000'));