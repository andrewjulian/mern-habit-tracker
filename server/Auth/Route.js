const express = require("express");
const router = express.Router();
const {
  signup,
  login,
  getUsers,
  deleteUser,
  logout,
  userAuth,
  getUser,
} = require("./Auth");

router.route("/signup").post(signup);
module.exports = router;

router.route("/login").post(login);
module.exports = router;

router.route("/users").get(getUsers);
module.exports = router;

router.route("/delete").delete(deleteUser);
module.exports = router;

router.route("/logout").get(logout);
module.exports = router;

router.route("/userauth").get(userAuth);
module.exports = router;

router.route("/user/:id").get(getUser);
module.exports = router;
