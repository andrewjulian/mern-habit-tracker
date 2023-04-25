const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    date: { type: Date, required: true },
  },
  { timestamps: true }
);

cardSchema.virtual("tasks", {
  ref: "Task",
  localField: "_id",
  foreignField: "card",
});

cardSchema.set("toJSON", { virtuals: true });
cardSchema.set("toObject", { virtuals: true });

const Card = mongoose.model("Card", cardSchema);
module.exports = Card;
