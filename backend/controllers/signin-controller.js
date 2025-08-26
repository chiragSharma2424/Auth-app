import User from "../models/user-model.js";

const signin = async (req, res) => {
    try {

    } catch(err) {
        console.log(`error in signin controller ${err}`);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

export default signin;