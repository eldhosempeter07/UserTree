const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let detail = new Schema({
  name: String,
  bonus: Number,
  position: String,
  level: String,
  createdAt: Date,
});

module.exports = mongoose.model("detail", detail);
