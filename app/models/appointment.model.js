const mongoose = require("mongoose");

const Appointment = mongoose.model(
  "Appointment",
  new mongoose.Schema({
    date_of_appointment: Date,
    physio: [
       {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Physio"
       }
    ],
    type_of_treatment: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Treatment"
      }
    ]
  })
);

module.exports = Appointment;
