const express = require("express");
const router = express.Router();
const {
  login,
  register,
  verify,
  allusers,
  logout,
  deleteUser,
  getCards,
} = require("./User");

router.route("/login").post(login);
module.exports = router;

router.route("/register").post(register);
module.exports = router;

router.route("/verify").get(verify);
module.exports = router;

router.route("/allusers").get(allusers);
module.exports = router;

router.route("/logout").post(logout);
module.exports = router;

router.route("/delete/:id").delete(deleteUser);
module.exports = router;

router.route("/:username/cards").get(getCards);
module.exports = router;
