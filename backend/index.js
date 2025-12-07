import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import { dbConnection } from './database/db.connection.js';
import authRouter from './router/authRouter.js';
import cors from 'cors';

import userRouter from './router/userRouter.js';
import tourRouter from './router/tourRouter.js';
import reviewRoutes from './router/reviewRouter.js';
import bookingrout from './router/bookingrouter.js';
const app = express();
const corsOptions = {
    origin: true,
    credentials: true
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

const startServer = async () => {
    try {
        await dbConnection();
        
        app.use('/api/auth', authRouter);
        app.use('/api/user', userRouter);
        app.use('/api/tour', tourRouter);
        app.use("/api/reviews", reviewRoutes);
        app.use("/api/bookings", bookingrout);

        
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};

startServer();