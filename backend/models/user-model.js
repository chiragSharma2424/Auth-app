import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {type: String, required: true},
    email: {type: String, required: true, trim: true, unique: true},
    password: {type: String, required: true}
}, { timestamps: true });

const User = mongoose.model('user', userSchema);
export default User;