const User = require("../model/UserModel");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const Card = require("../model/CardModel");

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

const login = async (req, res, next) => {
  passport.authenticate("local", async (err, user, info) => {
    if (err) throw err;
    if (!user) {
      return res.json({
        success: false,
        message: "Invalid username or password",
      });
    }
    await req.logIn(user, async (err) => {
      if (err) throw err;
      const userWithCards = await User.findById({ _id: user._id }).populate(
        "userCards"
      );

      const cards = await Card.find({ user: user._id }).populate("cardTasks");

      userWithCards.userCards = cards;

      req.session.user = userWithCards;
      res.json({
        success: true,
        message: "Logged in successfully",
        user: userWithCards,
      });
    });
  })(req, res, next);
};

const verify = (req, res) => {
  if (req.isAuthenticated()) {
    res.json(req.user);
  } else {
    res.json({ message: "Not authenticated" });
  }
};

const allusers = async (req, res) => {
  try {
    const users = await User.find().populate("userCards");
    const userCards = await Card.find().populate("cardTasks");

    res.json({ user: users, cards: userCards });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

const logout = (req, res) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.json({ message: "Logged out" });
  });
};

const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    res.json({ message: ` ${deletedUser.username} deleted` });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to delete user" });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id }).populate(
      "userCards"
    );

    const cards = await user.userCards.find().populate("cardTasks");

    user.userCards = cards;

    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to fetch user" });
  }
};

const getCards = async (req, res) => {
  try {
    console.log("user id", req.params.id);
    const user = await User.findById(req.params.id).populate("userCards");
    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to fetch cards" });
  }
};

module.exports = {
  login,
  register,
  verify,
  allusers,
  logout,
  deleteUser,
  getUser,
  getCards,
};
