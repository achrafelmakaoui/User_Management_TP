const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs");

const router = express.Router()


// GET ALL USERS
router.get("/", async (req, res) => {
    try {
        const users = await User.find().select("-password").sort({ createdAt: -1 });
        res.status(200).json(users);
    } 
    catch (err) {
        res.status(500).json(err);
    }
});

// GET USER BY ID
router.get("/find/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err);
    }
});

// UPDATE USER
router.put("/:id", async (req, res) => {
    try {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }

        const { isAdmin, _id, ...others } = req.body;
        const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: others }, { new: true }).select("-password");
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(updatedUser);
    }
    catch (err) {
        res.status(500).json({ message: "Error updating user", error: err.message });
    }
});
module.exports = router;