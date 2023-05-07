const express = require("express");
const router = express.Router();

const { createTask, deleteTask, updateTask, getTasks } = require("./Task");

router.route("/create/:id").post(createTask);
module.exports = router;

router.route("/delete/:id").delete(deleteTask);
module.exports = router;

router.route("/update/:id").put(updateTask);
module.exports = router;

router.route("/:id").get(getTasks);
module.exports = router;
