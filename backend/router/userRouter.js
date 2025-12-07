import express from 'express';
import { verifyToken } from '../middleware/auth.middleware.js';
import { getuser } from '../controller/getuser.controller.js';

const userRouter = express.Router();

userRouter.get('/getuser', verifyToken , getuser );

export default userRouter;
