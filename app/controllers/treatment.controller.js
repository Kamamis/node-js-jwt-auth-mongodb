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

exports.list_treatment = (req, res) => {
{
  db.mongoose.connection.db.collection('treatments', function(err, docs) {
         // Check for error
        if(err) return console.log(err);
        // Walk through the cursor
        docs.find().each(function(err, doc) {
            // Check for error
            if(err) return console.err(err);
            // Log document
//            res.
//                ('dane w konsoli '); //to powoduje błąd: Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client

            console.log(doc);
           // console.log('all');
            //res.send(doc);

//            res.send(
//            array.map(treatment => {
//            '<h1>${treatment.name}</h1><br><h5>${treatment.duration}</h5>'
//            })
//            )
        })
        res.send ('${docs}');
    });
};
//  Treatment.find((err) =>{
//      if (err) {
//      console.log("treatment.find failed")
//      res.status(500).send({ message: err });
//      return;
//      }
//      else {
//
//
//      console.log()
//      res.send('To powinna byc lista: ${treatment}');
//      }
//      });

    };
