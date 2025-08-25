import User from "../models/user-model.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

async function signup(req, res) {
    try {
        const { fullName, email, password } = req.body;

        if(!fullName || !email || !password) {
            return res.status(400).json({
                message: "Missing details"
            })
        }

        const existingUser = User.findOne({ email });
        if(existingUser) {
            return res.json({
                message: "user already exists"
            })
        }

        const hashedPass = await bcrypt.hash(password, 10);

        const newUser = User.create({
            fullName,
            email,
            password: hashedPass
        });

        const token = jwt.sign({ fullName, email, password }, process.env.JWT_SECRET, { expiresIn: '1h' });

        return res.status(200).json({
            message: "user signup successfully",
            token: token
        });

    } catch(err) {
        console.log(`error in signup controller ${err}`);
        return res.status.json({
            message: "internal server error"
        });
    }
}