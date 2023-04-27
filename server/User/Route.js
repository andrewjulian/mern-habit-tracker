const express = require("express");
const router = express.Router();
const { login, register, user } = require("./User");

router.route("/login").post(login);
module.exports = router;

router.route("/register").post(register);
module.exports = router;

router.route("/user").get(user);
module.exports = router;
