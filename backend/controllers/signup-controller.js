import User from "../models/user-model.js";

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

        const newUser = User.create({
            fullName,
            email,
            password
        });

    } catch(err) {
        console.log(`error in signup controller ${err}`);
        return res.status.json({
            message: "internal server error"
        });
    }
}