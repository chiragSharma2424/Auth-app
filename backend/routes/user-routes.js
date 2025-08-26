import express from 'express';
import signup from '../controllers/signup-controller.js';
import signin from '../controllers/signin-controller.js';
const userRouter = express.Router();

userRouter.post('/api/v2/signup', signup);
userRouter.post('/api/v2/signin', signin);

export default userRouter;