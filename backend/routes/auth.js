const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const router = express.Router()

// POST USER
router.post("/register", async (req, res) => {
    try {
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already in use" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const newUser = new User({
            nomComplet: req.body.nomComplet,
            email: req.body.email,
            password: hashedPassword,
            isAdmin: req.body.isAdmin || false,
        });

        const savedUser = await newUser.save();
        const { password, ...userWithoutPassword } = savedUser._doc;

        res.status(201).json(userWithoutPassword);
    } 
    catch (err) {
        res.status(500).json({ message: "Error creating user", error: err.message });
    }
});


module.exports = router;