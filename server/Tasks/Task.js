const Task = require("../model/TaskModel");
const User = require("../model/UserModel");
const Card = require("../model/CardModel");

const createTask = async (req, res) => {
  const user = await User.findById(req.params.id);
  const card = await Card.findById(req.body.cardId);
  const newTask = new Task({
    user: user,
    card: card,
    status: 0,
    text: req.body.text,
  });
  await newTask.save();
  user.card.cardTasks.push(newTask);
  await user.save();
  res.json(newTask);
};

const deleteTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  const user = await User.findById(task.user);
  const card = await Card.findById(task.card);
  user.card.cardTasks.pull(task);
  await user.save();
  await task.remove();
  res.json("Task Deleted");
};

const updateTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  task.status = req.body.status;
  await task.save();
  res.json(task);
};

const getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.params.id }).populate("card");
  res.json(tasks);
};

module.exports = {
  createTask,
  deleteTask,
  updateTask,
  getTasks,
};
