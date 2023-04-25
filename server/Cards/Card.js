const Card = require("../model/CardModel");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const userCards = async (req, res) => {
  try {
    const { userId } = req.body;
    const cards = await Card.find({ user: ObjectId(userId) }).populate({
      path: "cardTasks",
      select: "status text",
    });
    res.status(200).json({ succes: true, cards });
  } catch (error) {
    res.status(400).json({ succes: false, error });
  }
};

module.exports = { userCards };

const cards = async (req, res) => {
  try {
    const cards = await Card.find().populate({
      path: "cardTasks",
      select: "status text",
    });
    res.status(200).json({ succes: true, cards });
  } catch (error) {
    res.status(400).json({ succes: false, error });
  }
};

module.exports = { cards };
