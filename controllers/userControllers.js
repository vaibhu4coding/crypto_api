const User = require("../models/userModel");
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userRegistration = async (req, res) => {
  try {
    const {username, email, password, role} = req.body;
    const existingUser = await User.findOne({username});
    if (existingUser) {
      return res.status(400).json({message: "User already exists..."});
    }
    const newUser = new User({username, email, password, role});
    await newUser.save();
    res.status(201).json({newUser});
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};

const userLogin = async (req, res) => {
  try {
    const {username, password} = req.body;
    const user = await User.findOne({username});
    if (!user) {
      return res.status(401).json({error: "Invalid username or password"});
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({error: "Invalid username or password"});
    }
    const token = jwt.sign(
      {userId: user._id, username: user.username, role: user.role},
      "your_name"
    );
    res.status(201).json({token, user});
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};
module.exports = {userRegistration, userLogin};
