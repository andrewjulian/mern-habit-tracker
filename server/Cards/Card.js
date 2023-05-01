const Card = require("../model/CardModel");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const cards = async (req, res) => {
  try {
    const cards = await Card.find().lean();
    res.json(cards);
  } catch (error) {
    res.status(400).json({
      message: "An error occurred",
      error: error.message,
    });
  }
};

const deleteCard = async (req, res) => {
  try {
    const card = await Card.findByAndDelete({ _id: req.params.id });
    res.json({ success: true, card });
  } catch (error) {
    res.status(400).json({
      message: "An error occurred",
      error: error.message,
    });
  }
};

module.exports = { cards, deleteCard };
