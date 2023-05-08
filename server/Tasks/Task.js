const Task = require("../model/TaskModel");
const User = require("../model/UserModel");
const Card = require("../model/CardModel");

/* const createTask = async (req, res) => {
  const user = await User.findById(req.body.user);
  const card = await Card.findById(req.body.card);
  const newTask = new Task({
    user: user,
    card: card,
    status: req.body.status,
    text: req.body.text,
  });
  await newTask.save();
  user.card.cardTasks.push(newTask);
  await user.save();
  res.json(newTask);
}; */

const createTask = async (req, res) => {
  try {
    // Create the task
    const task = await Task.create({
      card: req.body.card,
      status: req.body.status,
      text: req.body.text,
    });

    // Add the task to the cards's list of tasks and save the user
    let card = await Card.findByIdAndUpdate(
      req.body.card._id,
      { $push: { cardTasks: task } },
      { new: true }
    );

    // Return the updated user object
    res.json({ success: true, task });
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
