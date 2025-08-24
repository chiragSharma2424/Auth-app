import express from 'express';
const userRouter = express.Router();

userRouter.post('/api/v2/signup');
userRouter.post('/api/v2/signin');

export default userRouter;