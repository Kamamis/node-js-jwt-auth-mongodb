const config = require("../config/auth.config");
const db = require("../models");
const Appointment = db.appointment;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.add_appointment = (req, res) => {
  const appointment = new Appointment({
    date_of_appointment: req.body.date_of_appointment,
    patient: req.body.patient,
    physio: req.body.physio,
    type_of_treatment: req.body.type_of_treatment
  });

  appointment.save((err, user) => {
    if (err) {
      console.log("failed");
      res.status(500).send({ message: err });
      return;
    }
    else {
    res.send({ message: "Appointment was added successfully!" });
    }
  });
};


