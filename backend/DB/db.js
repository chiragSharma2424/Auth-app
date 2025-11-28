import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const connectsDB = () => {
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log("database connected")
    }).catch((err) => {
        console.log(`error in DB connection ${err}`);
    })
}

export default connectsDB;