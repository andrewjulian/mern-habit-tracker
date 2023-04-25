const express = require("express");
const router = express.Router();

const { addCard, getCards, deleteCard, updateCard } = require("./Card");

router.route("/addcard").post(addCard);
module.exports = router;

router.route("/cards").get(getCards);
module.exports = router;

router.route("/updatecard").put(updateCard);
module.exports = router;

router.route("/deletecard").delete(deleteCard);
module.exports = router;
