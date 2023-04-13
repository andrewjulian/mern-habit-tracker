const Card = require("../model/Card");

exports.addCard = async (req, res) => {
  const { user, date, type, highlight, should_do, could_do } = req.body;
  try {
    const newCard = await Card.create({
      user,
      date,
      type,
      highlight,
      should_do,
      could_do,
    });
    res.status(201).json({
      message: "Card successfully created",
      card: newCard,
    });
  } catch (error) {
    res.status(400).json({
      message: "Card not successful created",
      error: error.message,
    });
  }
};

exports.getCards = async (req, res) => {
  try {
    const cards = await Card.find();
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
    const card = await Card.findById(req.params.id);
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
    const card = await Card.findById(req.params.id);
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
    const card = await Card.findById(req.params.id);
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