import mongoose from "mongoose";

const connectsDB = () => {
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log("database connected")
    }).catch((err) => {
        console.log(`error in DB connection ${err}`);
    })
}

export default connectsDB;