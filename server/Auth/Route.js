const express = require("express");
const router = express.Router();
const { register, login, getUsers, deleteUser } = require("./auth");

router.route("/register").post(register);
module.exports = router;

router.route("/login").post(login);
module.exports = router;

router.route("/getUsers").get(getUsers);
module.exports = router;

router.route("/deleteUser").delete(deleteUser);
module.exports = router;
