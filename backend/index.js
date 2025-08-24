import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
const app = express();
dotenv.config();
const port = process.env.PORT;
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        status: "ok",
        message: "API running"
    })
});

app.listen(port, () => {
    console.log(`server running on port ${port}`);
})