const mongoose = require("mongoose");

const Treatment = mongoose.model(
  "Treatment",
  new mongoose.Schema({
    name: {
           type: String,
           required: true
           },
    duration: String,
    price: String,
    description: String
  })
);

module.exports = Treatment;
