const User = require("../model/UserModel");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const passport = require("passport");

const login = async (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully Authenticated");
        console.log(req.user);
      });
    }
  })(req, res, next);
};

const register = async (req, res) => {
  try {
    const doc = await User.findOne({ username: req.body.username });
    if (doc) {
      res.json("User Already Exists");
    } else {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const newUser = new User({
        username: req.body.username,
        password: hashedPassword,
        email: req.body.email,
      });
      await newUser.save();
      res.json("User Created");
    }
  } catch (err) {
    throw err;
  }
};

const user = async (req, res) => {
  res.send(req.user);
};

const allusers = async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (err) {
    throw err;
  }
};

module.exports = { login, register, user, allusers };
