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

exports.deleteTask = async (req, res) => {
  try {
    const user = await user.findById(req.params.id);
    const task = user.tasks.id(req.params.taskId);
    if (task) {
      await task.remove();
      await user.save();
      res.status(200).json({
        message: "Task successfully deleted",
        task,
      });
    } else {
      res.status(400).json({
        message: "Task not successful deleted",
        error: error.message,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "Task not successful deleted",
      error: error.message,
    });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const user = await user.findById(req.params.id);
    const task = user.tasks.id(req.params.taskId);
    if (task) {
      const { user, card, status, text } = req.body;
      const updatedTask = await Task.findByIdAndUpdate(
        req.params.taskId,
        {
          user,
          card,
          status,
          text,
        },
        { new: true }
      );
      res.status(200).json({
        message: "Task successfully updated",
        task: updatedTask,
      });
    } else {
      res.status(400).json({
        message: "Task not successful updated",
        error: error.message,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "Task not successful updated",
      error: error.message,
    });
  }
};
