const User = require("../model/UserModel");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const ObjectId = mongoose.Types.ObjectId;

const login = async (req, res) => {
  console.log(req.body);
};

const register = async (req, res) => {
  console.log(req.body);
};

const user = async (req, res) => {
  console.log(req.body);
};

module.exports = { login, register, user };
