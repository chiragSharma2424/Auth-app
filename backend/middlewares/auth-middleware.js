import jwt from 'jsonwebtoken';

function verifyJwt (err, req, res, next) {
    try {
        
    } catch(err) {
        console.log(`error in auth middleware ${err}`);
        return res.status(400).json({
            message: "Not authorized, token invalid"
        })
    }
};

export default verifyJwt;