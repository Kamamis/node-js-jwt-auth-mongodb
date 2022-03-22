const mongoose = require("mongoose");

const Treatment = mongoose.model(
  "Treatment",
  new mongoose.Schema({
    name: String,
    duration: String
  })
);

module.exports = Treatment;
