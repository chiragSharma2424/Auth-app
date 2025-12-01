import User from "../models/user-model.js";
import validator from 'validator';
import dotenv from 'dotenv';
dotenv.config();
import bcrypt from 'bcryptjs';
import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';

async function signup(req, res) {
    try {
        const { fullName, email, password } = req.body;

        if(!fullName || !email || !password) {
            return res.status(400).json({
                message: "Missing details"
            })
        }

        if(!validator.isEmail(email)) {
            return res.status(400).json({
                message: "Invalid email format"
            })
        }

        const existingUser = await User.findOne({ email });
        if(existingUser) {
            return res.status(409).json({
                message: "user already exists"
            })
        }

        const hashedPass = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            fullName: fullName,
            email: email,
            password: hashedPass
        });

        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // sending welcome mail after user signup
        const transporter = nodemailer.createTransport({
            host: "smtp-relay.brevo.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.BREVO_USERNAME,
                pass: process.env.BREVO_PASSWORD
            }
        });


        const mailOptions = {
            from: "sharmachirag242004@gmail.com",
            to: email,
            subject: "Welcome to Our Service",
            text: `Hi ${email},\n Welcome to our platform\n\nRegards`
        };

        await transporter.sendMail(mailOptions);

        return res.status(200).json({
            success: true,
            message: `user signup successfully and mail sent to ${email}`,
            token: token,
            user: newUser
        });

    } catch(err) {
        console.log(`error in signup controller ${err}`);
        return res.status(500).json({
            message: "internal server error"
        });
    }
}

export default signup;