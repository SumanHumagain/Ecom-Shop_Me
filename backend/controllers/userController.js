import asyncHandler from '../middlewawre/asyncHandler.js';
import User from '../models/userModel.js';
import jwt from "jsonwebtoken";

//@desc Auth user and get token
//@route GET /api/users/login
//@access Public
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if(user){
   console.log("kj");

        if(user && (await user.matchPassword(password))){
   console.log("kj1");

            const token =  jwt.sign(
                {
                    userId: user._id
                }, 
                process.env.JWT_SECRET, {
                    expiresIn: '30d'
                });

            // set jwt as http-only cookie
            res.cookie('jwt', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV !== 'development',
                sameSite: 'strict',
                maxAge: 30 * 24 * 60 * 60 * 1000 //in millisecond
            })

            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin
            });
        } else {
            res.status(401);
            throw new Error('Invalid email or password');
        }
    }
});

//@desc Register user
//@route POST /api/users/
//@access Public
const registerUser = asyncHandler(async (req, res) => {
    res.send('register user');
});

//@desc logout user / clear cookie
//@route POST /api/users/logout
//@access Public
const logoutUser = asyncHandler(async (req, res) => {
    res.send('logout user');
});

//@desc get user profile
//@route POST /api/users/profile
//@access Private
const getUserProfile = asyncHandler(async (req, res) => {
    res.send('get user profile');
});

//@desc update user profile
//@route POST /api/users/
//@access Private/Admin
const updateUserProfile = asyncHandler(async (req, res) => {
    res.send('update user profile');
});

//@desc Get users
//@route GET /api/users/
//@access Private/Admin
const getUsers = asyncHandler(async (req, res) => {
    res.send('get users');
});

//@desc get users
//@route GET /api/users/:id
//@access Private/Admin
const getUserByID = asyncHandler(async (req, res) => {
    res.send('get user by id');
});

//@desc delete users
//@route DELETE /api/users/:id
//@access Private/Admin
const deleteUsers = asyncHandler(async (req, res) => {
    res.send('delete users');
});

//@desc upddate users
//@route PUT /api/users/:id
//@access Private/Admin
const updateUsers = asyncHandler(async (req, res) => {
    res.send('update user by id');
});

export { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile, getUsers, getUserByID, deleteUsers, updateUsers };
