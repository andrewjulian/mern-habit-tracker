const express = require("express");
const router = express.Router();

const { addTask, getTasks, deleteTask, updateTask } = require("./Task");

router.route("/addtask").post(addTask);
module.exports = router;

router.route("/gettasks").get(getTasks);
module.exports = router;

router.route("/updatetask").put(updateTask);
module.exports = router;

router.route("/deletetask").delete(deleteTask);
module.exports = router;
