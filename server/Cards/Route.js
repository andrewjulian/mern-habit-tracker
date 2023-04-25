const express = require("express");
const router = express.Router();

const { cards } = require("./Card");

router.route("/cards").get(cards);
module.exports = router;
