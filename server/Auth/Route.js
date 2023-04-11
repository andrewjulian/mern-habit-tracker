const express = require("express");
const router = express.Router();
const { register, login } = require("./auth");

router.route("/register").post(register);
module.exports = router;

router.route("/login").post(login);
module.exports = router;
