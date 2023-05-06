const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema(
  {
    date: { type: Date, required: true },
    cardTasks: [{ type: Schema.Types.ObjectId, ref: "Task" }],
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

const Card = mongoose.model("Card", cardSchema);
module.exports = Card;
