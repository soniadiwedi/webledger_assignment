const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const colors = require("colors");
require("dotenv").config();

const { userModel } = require("../models/userModel");

exports.createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userExist = await userModel.findOne({ email: email });

    if (userExist) {
      return res.status(400).json({
        status: 400,
        success: false,
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    if (!hashedPassword) {
      return res.status(500).json({
        status: 500,
        success: false,
        message: "Error in hashing password",
      });
    }

    const userData = new userModel({
      name,
      email,
      password: hashedPassword,
      
    });
    await userData.save();
    return res.status(201).json({
      status: 201,
      success: true,
      message: "Registration successful",
      data: userData,
    });
  } catch (error) {
    console.error(colors.red("Error: ", error.message));
    res.status(500).json({ status: 500, error: "Registration failed" });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  const SECRET_KEY = process.env.SECRET_KEY;
  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(401).json({
        status: 401,
        success: false,
        error: "Invalid credentials",
      });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({
        status: 401,
        success: false,
        error: "Invalid credentials",
      });
    }
    const token = jwt.sign({ userId: user._id }, SECRET_KEY, {
      expiresIn: "24h",
    });

    return res.status(200).json({
      status: 200,
      success: true,
      message: "Login successful",
      token: token,
    });
  } catch (error) {
    console.error(colors.red("Error: ", error.message));
    res.status(500).json({
      status: 500,
      success: false,
      error: "Login failed",
    });
  }
};
