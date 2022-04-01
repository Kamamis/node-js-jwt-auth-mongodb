const config = require("../config/auth.config");
const db = require("../models");
const Appointment = db.appointment;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.add_appointment = async (req, res) => {
  const appointment = new Appointment({
    date_of_appointment: req.body.date_of_appointment,
    patient: req.body.patient,
    physio: req.body.physio,
    type_of_treatment: req.body.type_of_treatment
  });

  const savedAppointment = appointment.save((err, user) => {
    if (err) {
      console.log("failed");
      res.status(500).send({ message: err });
      return;
    }
    else
//    {
//    try {
//    const savedAppointment =  appointment.save();
//    res.json(savedAppointment);
//    }
//    catch (err) {
//    res.json({message: "blad w catch"})}
//    }
    {
    res.send({
    message: "Appointment was added successfully!" ,
    date_of_appointment: appointment.date_of_appointment,
    patient: appointment.patient,
    physio: appointment.physio,
    type_of_treatment: appointment.type_of_treatment
    });
    }
  });
};

exports.list_appointment = async (req, res) => {
try {
const list_appointment = await Appointment.find();
res.json(list_appointment);}
catch (err)
{
res.json({message: err});
}

 };


