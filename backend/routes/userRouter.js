const express = require('express');
const userController = require('../controllers/userController');

// Create an instance of an Express Router
const userRouter = express.Router();

// Create a new user http://localhost:8080/api/auth/register
userRouter.post('/register', userController.createUser);

// Log in user http://localhost:8080/api/auth/login
userRouter.post('/login', userController.loginUser);

module.exports = {userRouter};