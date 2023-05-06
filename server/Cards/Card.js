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
    const card = await Card.findByIdAndDelete({ _id: req.params.id });
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
    // Create the card
    const card = await Card.create(req.body);

    // Add the card to the user's list of cards and save the user
    const user = await User.findByIdAndUpdate(
      req.body.user,
      { $push: { userCards: card } },
      { new: true }
    );

    // Return the updated user object
    res.json({ success: true, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = { cards, deleteCard, addCard };
