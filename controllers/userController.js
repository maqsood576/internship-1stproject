
const User = require("../models/User");

// Get all users
const getAllUsers = (req, res) => {
    const users = User.getAllUsers();

    res.status(200).json({
        success: true,
        message: "Users fetched successfully",
        data: users
    });
};

// Get user by ID
const getUserById = (req, res) => {
    const user = User.getUserById(req.params.id);

    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }

    res.status(200).json({
        success: true,
        data: user
    });
};

// Create user
const createUser = (req, res) => {
    const { name, email } = req.body;

    if (
        typeof name !== "string" ||
        typeof email !== "string" ||
        !name.trim() ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    ) {
        return res.status(400).json({
            success: false,
            message: "Valid name and email are required"
        });
    }

    const newUser = User.createUser({
        name: name.trim(),
        email: email.trim()
    });

    res.status(201).json({
        success: true,
        message: "User created successfully",
        data: newUser
    });
};

// Update user
const updateUser = (req, res) => {
    const { name, email } = req.body;

    if (
        typeof name !== "string" ||
        typeof email !== "string" ||
        !name.trim() ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    ) {
        return res.status(400).json({
            success: false,
            message: "Valid name and email are required"
        });
    }

    const updatedUser = User.updateUser(
        req.params.id,
        {
            name: name.trim(),
            email: email.trim()
        }
    );

    if (!updatedUser) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }

    res.status(200).json({
        success: true,
        message: "User updated successfully",
        data: updatedUser
    });
};

// Delete user
const deleteUser = (req, res) => {
    const deletedUser = User.deleteUser(req.params.id);

    if (!deletedUser) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }

    res.status(200).json({
        success: true,
        message: "User deleted successfully",
        data: deletedUser
    });
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};
