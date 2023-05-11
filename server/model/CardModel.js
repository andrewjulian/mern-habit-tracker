const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    date: { type: Date, required: true },
    cardTasks: [{ type: Schema.Types.ObjectId, ref: "Task" }],
  },
  { timestamps: true }
);

const Card = mongoose.model("Card", cardSchema);
module.exports = Card;
