const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');
const UserModel = require("../Models/User");

const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        "check if user exist"
        const user = await UserModel.findOne({ email });
        if (user) {
            return res.status(409).json({
                message: 'User already exists, you can login',
                success: false
            });
        }

        // create new user
        const hashedPassword = await bcrypt.hash(password, 10);
        const userModel = new UserModel({ name, email, password: hashedPassword });
        await userModel.save();

        res.status(201).json({
            message: 'Signup successfully',
            success: true
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const errorMsg = "Authentication failed. Email or password is wrong.";

        "check if users exist"
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(403).json({
                message: errorMsg,
                success: false
            });
        }

        const isPasswordEqual = await bcrypt.compare(password, user.password);
        if (!isPasswordEqual) {
            return res.status(403).json({
                message: errorMsg,
                success: false
            });
        }

        // create jwt
        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.status(200).json({
            message: 'Login successfully',
            success: true,
            jwtToken,
            email,
            name: user.name
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};

module.exports = {
    signup,
    login
};
