import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import errorHandler from './middlewares/error-middleware.js';
const app = express();
dotenv.config();
const port = process.env.PORT;
app.use(cors());
app.use(express.json());


// error middleware
app.use(errorHandler);

app.get('/', (req, res) => {
    res.json({
        status: "ok",
        message: "API running"
    })
});

app.listen(port, () => {
    console.log(`server running on port ${port}`);
})