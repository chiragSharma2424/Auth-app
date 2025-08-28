import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

function generateAccessToken (payload, expiresIn = '1h') {
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });
    return token;
}

function generateRefereshToken (payload, expiresIn = '7d') {
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });
}

export { generateAccessToken, generateAccessToken };