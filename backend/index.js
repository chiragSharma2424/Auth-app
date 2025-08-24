import express from 'express';
const app = express();
import dotenv from "dotenv";
dotenv.config();
import bcrypt from 'bcryptjs';
import cors from 'cors';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

app.use(express.json());
app.use(cors());
const port = process.env.PORT;


// write function which connects to db for now we are using mongoDB compass
function connectsToDB() {
    mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log("database connected")
    }).catch((err) => {
        console.log(`error in database connection ${err}`)
    })
}




// writing model for user
const userSchema = new mongoose.Schema({
    fullName: {type: String, required: true},
    email: {type: String, required: true, lowercase: true, trim: true},
    password: {type: String, required: true}
}, {timestamps: true})

const User = mongoose.model("user", userSchema);



// testing endpoint
app.get('/', (req, res) => {
   return res.status(200).json({
      message: "api endpoint is working"
   })
});


// signup function
app.post('/api/v1/signup', async (req, res) => {
    try {
        const { fullName, email, password } = req.body;

        if(!fullName || !email || !password) {
            return res.status(400).json({
                message: "Invalid credentials"
            });
        }

        // check kro user already exists krta h db me
        const existingUser = await User.findOne({email});
        if(existingUser) {
            return res.status(400).json({
                message: "user already exists in database"
            })
        }

        // password hashing kr do
        const hashedPassword = await bcrypt.hash(password, 10);

        // nhi exists krta tw create a new user
        const newUser = await User.create({
            fullName: fullName,
            email: email,
            password: hashedPassword
        });

        const token = jwt.sign({fullName, email, password}, process.env.JWT_SECRET, {expiresIn: '1h'});

        return res.status(200).json({
            message: "user created successfully",
            user: newUser,
            token: token
        });

    } catch(err) {
        console.log(`error in signup function ${err}`);
        return res.status(500).json({
            message: "server error"
        })
    }
});



// signin function, yha pe token assign hoga
app.post('/api/v1/signin', async (req, res) => {
    try {
        const { email, password } = req.headers;

        if(!email || !password) {
            return res.status(400).json({
                message: "Invalid credentials"
            })
        }
        
        const existingUser = await User.findOne({email});
        if(!existingUser) {
            return res.status(400).json({
                message: "user not found"
            })
        }

        // compare the password
        const isMatchPassword = bcrypt.compare(password, existingUser.password);
        if(!isMatchPassword) {
            return res.status(400).json({
                message: "icorrect password"
            });
        }

        const token = jwt.sign({email, password}, process.env.JWT_SECRET, {expiresIn: '1h'});
        console.log("generated token", token);

        return res.status(200).json({
            message: "signin successfully",
            token
        });

    } catch(err) {
        console.log(`error in signin function ${err}`);
        return res.status(500).json({
            message: "server error"
        })
    }
});


// function call jo database connect krega
connectsToDB();
app.listen(port, () => {
    console.log(`server started on ${port}`);
});