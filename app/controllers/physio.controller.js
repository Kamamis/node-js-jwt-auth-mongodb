const config = require("../config/auth.config");
const db = require("../models");
const Physio = db.physio;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.add_physio = (req, res) => {
  const physio = new Physio({
    name: req.body.name
  });

  physio.save((err, user) => {
    if (err) {
      console.log("failed");
      res.status(500).send({ message: err });
      return;
    }
/*
   new Physio({
          name: "Monika"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }

          console.log("added 'Monika' to Physio collection");
        });
*/

//    if (req.body.roles) {
//      Role.find(
//        {
//          name: { $in: req.body.roles }
//        },
//        (err, roles) => {
//          if (err) {
//            res.status(500).send({ message: err });
//            return;
//          }
//
//          user.roles = roles.map(role => role._id);
//          user.save(err => {
//            if (err) {
//              res.status(500).send({ message: err });
//              return;
//            }
//
//            res.send({ message: "User was registered successfully!" });
//          });
//        }
//      );
//    } else {
//      Role.findOne({ name: "user" }, (err, role) => {
//        if (err) {
//          res.status(500).send({ message: err });
//          return;
//        }
//
//        user.roles = [role._id];
//        user.save(err => {
//          if (err) {
//            res.status(500).send({ message: err });
//            return;
//          }
//
//          res.send({ message: "User was registered successfully!" });
//        });
//      });
//    }
  });
};