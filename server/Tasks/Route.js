const express = require("express");
const router = express.Router();

const { createTask, getTask, deleteTask, updateTask } = require("./Task");

router.route("/addTask").post(createTask);
module.exports = router;

router.route("/:id").get(getTask);
module.exports = router;

router.route("/id").patch(updateTask);
module.exports = router;

router.route("/delete/:id").delete(deleteTask);
module.exports = router;
