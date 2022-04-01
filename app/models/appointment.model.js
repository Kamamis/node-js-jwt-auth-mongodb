const mongoose = require("mongoose");

const Appointment = mongoose.model(
  "Appointment",
  new mongoose.Schema({
    date_of_appointment:
           {
             type: Date,
             default: Date.now
           },
    patient:
           {
             type: mongoose.Schema.Types.ObjectId,
             ref: "User" //user z roles: "user"
           },
    physio:
       {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Moderator" //user z roles: "moderator"
       },
    type_of_treatment:
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Treatment"
      }
  })
);

module.exports = Appointment;
