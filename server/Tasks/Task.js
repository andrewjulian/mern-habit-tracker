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
