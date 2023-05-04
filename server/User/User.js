const User = require("../model/UserModel");
const bcrypt = require("bcryptjs");
const passport = require("passport");

const login = async (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) {
      return res.json({
        success: false,
        message: "Invalid username or password",
      });
    }
    req.logIn(user, (err) => {
      if (err) throw err;
      req.session.user = user;
      return res.json({
        success: true,
        message: "Logged in successfully",
        user: req.user,
      });
    });
  })(req, res, next);
};

/* const login = async (req, res, next) => {
  passport.authenticate("local", async (err, user, info) => {
    if (err) return next(err);
    if (!user) {
      return res.json({
        success: false,
        message: "Invalid username or password",
      });
    }
    req.logIn(user, async (err) => {
      if (err) return next(err);
      try {
        const user = await User.findById(user._id);
        req.session.user = user;
        return res.json(user);
      } catch (error) {
        return next(error);
      }
    });
  })(req, res, next);
}; */

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

const verify = (req, res) => {
  if (req.isAuthenticated()) {
    res.json(req.user);
  } else {
    res.json({ message: "Not authenticated" });
  }
};

const allusers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
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

const getCards = async (req, res) => {
  try {
    const user = await User.findBy({ username: req.params.username }).populate(
      "userCards"
    );
    res.json(user.userCards);
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
  getCards,
};
