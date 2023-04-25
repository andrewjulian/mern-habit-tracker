const Card = require("../model/CardModel");
const ObjectId = mongoose.Types.ObjectId;
const mongoose = require("mongoose");

exports.addCard = async (req, res) => {
  const { user, date, type } = req.body;
  try {
    const card = await Card.create({
      user,
      date,
      type,
    });
    res.status(201).json({
      message: "Card successfully created",
      card,
    });
  } catch (error) {
    res.status(400).json({
      message: "Card not successful created",
      error: error.message,
    });
  }
};

exports.getCards = async (req, res) => {
  const user = await user.findById(ObjectId(req.params.id));
  try {
    const cards = await Card.find({ user: user._id });
    res.status(200).json({
      message: "Cards successfully retrieved",
      cards,
    });
  } catch (error) {
    res.status(400).json({
      message: "Cards not successful retrieved",
      error: error.message,
    });
  }
};

exports.getCard = async (req, res) => {
  try {
    const user = await user.findById(req.params.id);
    const card = await user.cards.id(req.params.cardId);
    res.status(200).json({
      message: "Card successfully retrieved",
      card,
    });
  } catch (error) {
    res.status(400).json({
      message: "Card not successful retrieved",
      error: error.message,
    });
  }
};

exports.updateCard = async (req, res) => {
  try {
    const user = await user.findById(req.params.id);
    const card = user.cards.id(req.params.cardId);
    if (card) {
      const { user, date, type, highlight, should_do, could_do } = req.body;
      const updatedCard = await Card.findByIdAndUpdate(
        req.params.id,
        {
          user,
          date,
          type,
          highlight,
          should_do,
          could_do,
        },
        { new: true }
      );
      res.status(200).json({
        message: "Card successfully updated",
        card: updatedCard,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "Card not successful updated",
      error: error.message,
    });
  }
};

exports.deleteCard = async (req, res) => {
  try {
    const user = await user.findById(req.params.id);
    const card = user.cards.id(req.params.cardId);
    if (card) {
      await card.remove();
      res.status(200).json({
        message: "Card successfully deleted",
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "Card not successful deleted",
      error: error.message,
    });
  }
};
