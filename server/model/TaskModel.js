const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    card: { type: Schema.Types.ObjectId, ref: "Card", required: true },
    status: { type: Number, required: true },
    text: { type: String, required: true },
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
