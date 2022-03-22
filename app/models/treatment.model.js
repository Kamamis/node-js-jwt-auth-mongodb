const mongoose = require("mongoose");

const Treatment = mongoose.model(
  "Treatment",
  new mongoose.Schema({
    name: String,
    duration: Date
  })
);

module.exports = Treatment;
