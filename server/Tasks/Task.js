const Task = require("../model/TaskModel");

exports.addTask = async (req, res) => {
  const { user, card, status, text } = req.body;
  try {
    const newTask = await Task.create({
      user,
      card,
      status,
      text,
    });
    res.status(201).json({
      message: "Task successfully created",
      task: newTask,
    });
  } catch (error) {
    res.status(400).json({
      message: "Task not successful created",
      error: error.message,
    });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await User.findById(req.params.id).populate("tasks");
    res.status(200).json({
      message: "Tasks successfully retrieved",
      tasks,
    });
  } catch (error) {
    res.status(400).json({
      message: "Tasks not successful retrieved",
      error: error.message,
    });
  }
};
