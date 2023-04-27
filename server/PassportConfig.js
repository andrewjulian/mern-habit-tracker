const User = require("./model/UserModel");
const bcrypt = require("bcryptjs");
const localStrategy = require("passport-local").Strategy;

module.exports = function (passport) {
  passport.use(
    new localStrategy(async (username, password, done) => {
      try {
        const user = await User.findOne({ username });
        if (!user) {
          return done(null, false);
        }
        const result = await bcrypt.compare(password, user.password);
        if (result) {
          return done(null, user);
        }
        return done(null, false);
      } catch (err) {
        return done(err);
      }
    })
  );

  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });

  passport.deserializeUser(async (id, cb) => {
    try {
      const user = await User.findOne({ _id: id });
      if (!user) {
        return cb(null, false);
      }
      const userInformation = {
        username: user.username,
      };
      return cb(null, userInformation);
    } catch (err) {
      return cb(err);
    }
  });
};
