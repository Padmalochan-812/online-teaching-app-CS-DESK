const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// REGISTER USER
exports.registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // check user exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }

        // hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // create user
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        res.status(201).json({
            message: "User registered successfully",
            user,
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Login User 

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({ message: "Invalid email" });
     
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: "Invalid Password" });
    }

    const token = jwt.sign(
        { 
            id: user._id,
            role: user.role
        },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
    );
    res.cookie("token", token, {
        httpOnly: true,
        secure: false, // Set to true in production
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    })
    .json({
        message: "Login Successful",
    });

};

// Logout User
exports.logoutUser = (req, res) => {
    res.clearCookie("token", {
        httpOnly: true,
        secure: false,
    }).json({
        message: "Logout Successfully"
    });
    
};