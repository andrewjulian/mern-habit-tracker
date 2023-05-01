const express = require("express");
const router = express.Router();

const { cards, deleteCard } = require("./Card");

router.route("/cards").get(cards);
module.exports = router;

router.route("/delete/:id").delete(deleteCard);
module.exports = router;

/* router.route("/add").post(addCard);
module.exports = router;

router.route("/update/:id").put(updateCard);
module.exports = router;

router.route("/search/:id").get(searchCard);
module.exports = router;
 */
