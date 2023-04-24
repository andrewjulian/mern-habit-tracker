const express = require("express");
const router = express.Router();

const { addTask, getTasks, deleteTask, updateTask } = require("./Task");

router.route("/addTask").post(addTask);
module.exports = router;

router.route("/getTasks").get(getTasks);
module.exports = router;

router.route("/updateTask").put(updateTask);
module.exports = router;

router.route("/deleteTask").delete(deleteTask);
module.exports = router;
