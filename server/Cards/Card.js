const Card = require("../model/CardModel");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const cards = async (req, res) => {
  try {
    const cards = await Card.find().lean();
    res.status(200).json({ success: true, cards });
  } catch (error) {
    res.status(400).json({
      message: "An error occurred",
      error: error.message,
    });
  }
};

module.exports = { cards };
