const express = require("express");
const router = express.Router();

const { createTask, getTasks } = require("./Task");

router.route("/addTask").post(createTask);
module.exports = router;

router.route("/:id").get(getTasks);
module.exports = router;
