const express = require("express");
const router = express.Router();
const { login, register, verify, allusers, logout } = require("./User");

router.route("/login").post(login);
module.exports = router;

router.route("/register").post(register);
module.exports = router;

router.route("/verify").get(verify);
module.exports = router;

router.route("/allusers").get(allusers);
module.exports = router;

router.route("/logout").get(logout);
module.exports = router;
