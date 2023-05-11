const Task = require("../model/TaskModel");
const User = require("../model/UserModel");
const Card = require("../model/CardModel");

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);

    let card = await Card.findByIdAndUpdate(
      req.body.card,
      { $push: { cardTasks: task } },
      { new: true }
    );

    card = await Card.findById(req.body.card).populate("cardTasks");

    res.json({ success: true, card });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.params.id }).populate("card");
  res.json(tasks);
};

const deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    const card = await Card.findById(task.card);
    card.cardTasks.pull(task);
    await card.save();
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  createTask,
  deleteTask,
  getTasks,
};
