const express = require("express");
const router = express.Router();

const { createTask, getTasks, deleteTask } = require("./Task");

router.route("/addTask").post(createTask);
module.exports = router;

router.route("/:id").get(getTasks);
module.exports = router;

router.route("/delete/:id").delete(deleteTask);
module.exports = router;
