import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import errorHandler from './middlewares/error-middleware.js';
import userRouter from './routes/user-routes.js';
import connectsDB from './DB/db.js';
const app = express();
dotenv.config();
const port = process.env.PORT;
app.use(cors());
app.use(express.json());


// error middleware
app.use(errorHandler);


// routes
app.use('/api/v1/user', userRouter);


app.get('/', (req, res) => {
    res.json({
        status: "ok",
        message: "API running"
    })
});

connectsDB();

app.listen(port, () => {
    console.log(`server running on port ${port}`);
})