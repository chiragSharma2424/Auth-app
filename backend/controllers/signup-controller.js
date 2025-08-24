async function signup(req, res) {
    try {
        const { fullName, email, password } = req.body;

        if(!fullName || !email || !password) {
            return res.status(400).json({
                message: "Missing details"
            })
        }
    } catch(err) {
        console.log(`error in signup controller ${err}`);
        return res.status.json({
            message: "internal server error"
        });
    }
}