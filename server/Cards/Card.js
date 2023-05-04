const Card = require("../model/CardModel");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const User = require("../model/UserModel");

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

const addCard = async (req, res) => {
  try {
    const card = await Card.create(req.body);
    const user = await User.findById(req.body.user);
    user.userCards.push(card._id);
    await user.save();
    res.json({ success: true, card, user });
  } catch (error) {
    res.status(400).json({
      message: "An error occurred",
      error: error.message,
    });
  }
};

module.exports = { cards, deleteCard, addCard };
