const express = require("express");
const router = express.Router();

const { addCard, getCards, deleteCard, updateCard } = require("./Manage");

router.route("/addCard").post(addCard);
module.exports = router;

router.route("/getCards").get(getCards);
module.exports = router;

router.route("/updateCard").put(updateCard);
module.exports = router;

router.route("/deleteCard").delete(deleteCard);
module.exports = router;
