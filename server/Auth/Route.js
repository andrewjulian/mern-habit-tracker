const express = require("express");
const router = express.Router();
const { signup, login, getUsers, deleteUser } = require("./auth");

router.route("/signup").post(signup);
module.exports = router;

router.route("/login").post(login);
module.exports = router;

router.route("/getUsers").get(getUsers);
module.exports = router;

router.route("/deleteUser").delete(deleteUser);
module.exports = router;
