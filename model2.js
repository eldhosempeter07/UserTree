const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let user = new Schema({
  name: String,
  boss_name: String,
  level: String,
  boss_count: Number,
  position: String,
  createdAt: Date,
  bonus: Number,
});

module.exports = mongoose.model("user", user);
