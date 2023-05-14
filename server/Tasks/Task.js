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

const getTask = async (req, res) => {
  const task = await Task.find({ _id: req.params.id }).populate("card");
  res.json(task);
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

const updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    const card = await Card.findById(req.body.card);

    task.text = req.body.text;
    task.status = req.body.status;
    task.card = card;

    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      {
        text: req.body.text,
        status: req.body.status,
      },
      { new: true }
    );

    res.json({ success: true, task: updatedTask });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  createTask,
  deleteTask,
  getTask,
  updateTask,
};
