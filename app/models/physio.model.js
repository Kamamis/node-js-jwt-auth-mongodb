const mongoose = require("mongoose");

const Physio = mongoose.model(
  "Physio",
  new mongoose.Schema({
    name: String
  })
);

module.exports = Physio;
