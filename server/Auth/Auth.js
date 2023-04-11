const User = require("../model/User");
const bcrypt = require("bcryptjs");

exports.register = async (req, res, next) => {
  const { username, password, email } = req.body;
  try {
    bcrypt.hash(password, 10).then(async (hash) => {
      await User.create({
        username,
        password: hash,
        email,
      })
        .then((user) =>
          res.status(200).json({
            message: "User successfully created",
            user,
          })
        )
        .catch((error) =>
          res.status(400).json({
            message: "User not successful created",
            error: error.message,
          })
        );
    });
  } catch (error) {
    res.status(400).json({
      message: "An error occurred",
      error: error.message,
    });
  }
};

exports.login = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username, password });
    if (!user) {
      res.status(401).json({
        message: "Login not successful",
        error: "User not found",
      });
    } else {
      res.status(200).json({
        message: "Login successful",
        user,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "An error occurred",
      error: error.message,
    });
  }
};

exports.getUsers = async (req, res, next) => {
  await User.find({})
    .then((users) => {
      const userFunction = users.map((user) => {
        const container = {};
        container.username = user.username;
        container.email = user.email;
        container.password = user.password;
        return container;
      });
      res.status(200).json({ user: userFunction });
    })
    .catch((err) =>
      res.status(401).json({ message: "Not successful", error: err.message })
    );
};