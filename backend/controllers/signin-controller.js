import User from "../models/user-model.js";
import bcrypt from 'bcryptjs';
import { generateAccessToken } from "../utils/generateToken.js";
import dotenv from 'dotenv';
dotenv.config();

const signin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if(!email || !password) {
            return res.status(400).json({
                message: "Email and password are required"
            })
        };

        const user = await User.findOne({ email });
        
        if(!user) {
            return res.status(400).json({
                message: "user not found"
            })
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if(!isPasswordMatch) {
            return res.status(400).json({
                success: false,
                message: "invalid credentials"
            })
        }

        const token = generateAccessToken({email, password});

        return res.status(200).json({
            success: true,
            message: "singin successfully",
            token: token,
            user: user
        });
        
    } catch(err) {
        console.log(`error in signin controller ${err}`);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

export default signin;