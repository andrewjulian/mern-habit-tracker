const express = require("express");
const router = express.Router();

const { userCards, cards } = require("./Card");

router.route("/usercards").get(userCards);
module.exports = router;

router.route("/cards").get(cards);
module.exports = router;
