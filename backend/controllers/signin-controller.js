import User from "../models/user-model.js";

const signin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if(!email || !password) {
            return res.status(400).json({
                message: "Email and password are required"
            })
        };

        const noUser = User.findOne({ email });
        
        if(!noUser) {
            return res.status(400).json({
                message: "user not found"
            })
        }
        
    } catch(err) {
        console.log(`error in signin controller ${err}`);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

export default signin;