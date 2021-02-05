const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let customer = new Schema({
  name: String,
  boss_name: String,
  createdAt: Date,
  position: String,
  boss_count: Number,
  level: String,
  bonus: Number,
});

module.exports = mongoose.model("customer", customer);
