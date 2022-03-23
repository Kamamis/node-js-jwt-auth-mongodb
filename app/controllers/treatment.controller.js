const config = require("../config/auth.config");
const db = require("../models");
const Treatment = db.treatment;

const User = db.user;
const Role = db.role;


var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.add_treatment = (req, res) => {
  const treatment = new Treatment({
    name: req.body.name,
    duration: req.body.duration
  });

  treatment.save((err, user) => {
    if (err) {
      console.log("failed");
      res.status(500).send({ message: err });
      return;
    }
    else {
    res.send({ message: "Treatment was added successfully!" });
    }
  });
};