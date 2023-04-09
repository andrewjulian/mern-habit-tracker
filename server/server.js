const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const bodyParser = require("body-parser");
const { Schema } = mongoose;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB Atlas!");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB Atlas:", error);
  });

app.get("/api/home", (req, res) => {
  res.json({
    name: "John Doe",
    age: 30,
  });
});

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  display_name: { type: String, required: true },
  email: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

app.post("/api/user", (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
    display_name: req.body.display_name,
    email: req.body.email,
  });
  user
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Handling POST requests to /api/user",
        createdUser: user,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

const cardSchema = new Schema({
  user_id: { type: String, required: true },
  date: { type: Date, required: true },
  type: { type: String, required: true },
  highlight: { type: String, required: true },
  should_do: { type: array }, //array of strings
  could_do: { type: array }, //array of strings
});

const Card = mongoose.model("Card", cardSchema);

app.post("/api/card", (req, res) => {
  const card = new Card({
    user_id: req.body.user_id,
    date: req.body.date,
    type: req.body.type,
    highlight: req.body.highlight,
    should_do: req.body.should_do,
    could_do: req.body.could_do,
  });
  card
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Handling POST requests to /api/card",
        createdCard: card,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});
