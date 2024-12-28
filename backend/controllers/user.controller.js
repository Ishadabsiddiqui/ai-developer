import * as userService from "../services/user.service.js";

import userModel from "../models/user.model.js";
import { validationResult } from "express-validator";
import redisClient from "../services/redis.service.js";

export const createUserController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const user = await userService.createUser(req.body);
    const token = await user.generateJWT();
    delete user._doc.password;
    res.status(201).json({ token, user });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export const loginUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email: email }).select("+password");
    if (!email) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const isMatch = await user.isValidPassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = await user.generateJWT();
    delete user._doc.password;
    res.status(200).json({ token, user });
  } catch (err) {
    res.status(400).json(err.message);
  }
};

export const getUserProfile = async (req, res) => {
  console.log(req.user);
  res.status(200).json({ user: req.user });
};

export const logoutUser = async (req, res) => {
  try {
    const token = req.cookies.token || req.headers.authorization.split(" ")[1];
    redisClient.set(token, "logout", "EX", 60 * 60 * 24);
    res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const loggedInUser = await userModel.findOne({
      email: req.user.email,
    });
    const allUsers = await userService.getAllUser({ userId: loggedInUser._id });
    return res.status(200).json({ users: allUsers });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err.message });
  }
};
