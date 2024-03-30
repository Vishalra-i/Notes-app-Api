'use strict';
import User from "../models/user.model.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import ApiError from "../utils/ApiError.js"
import bcrypt from "bcrypt"
import { ApiResponse } from "../utils/ApiResponse.js"
import jwt from 'jsonwebtoken';


// Register new user controller
const userSignup = asyncHandler(async (req, res) => {

    const { fullName, password, email } = req.body;

    // Check if the email is already registered
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
        throw new ApiError(400, 'Email already registered');
    }

    // Create a new user
    const newUser = await User.create({
        fullName,
        password: bcrypt.hashSync(password, 10),
        email
    });

    // Remove password from the user object
    const { password: _, ...userWithoutPassword } = newUser.toJSON();

    // Return success response without password
    res.status(201).json(new ApiResponse(201, userWithoutPassword, "Registration Successful"));

});

//Login User
const userLogin = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    // Check if the email exists in the database
    const user = await User.findOne({ where: { email } });
    if (!user) {
        throw new ApiError(401, 'Invalid email or password');
    }

    // Check if the password matches
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
        throw new ApiError(401, 'Invalid email or password');
    }

    // Set cookie containing the user's ID
    res.cookie('userId', user.id, { maxAge: 3600000, httpOnly: true }); // Max age: 1 hour

    res.status(200).json(new ApiResponse(200, { email: user.email }, "Login Successful"));
});


export {
    userSignup,
    userLogin
};
