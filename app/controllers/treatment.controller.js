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
    //res.send({ message: "Treatment was added successfully!" });
    res.status(200).send({                            //tu można wymiennie send lub json
    message: "Treatment was added successfully!" ,
    id: treatment._id,
    name: treatment.name,
    duration: treatment.duration
    })
    }
  });
};

exports.list_treatment = async (req, res) => {
//{
//  db.mongoose.connection.db.collection('treatments', function(err, docs) {
//         // Check for error
//        if(err) return console.log(err);
//        // Walk through the cursor
//        docs.find().each(function(err, doc) {
//            // Check for error
//            if(err) return console.err(err);
//            // Log document
//            console.log(doc);
//        })
//        res.send ('${docs}');
//    });
//};


//  Treatment.find((err) =>{
//      if (err) {
//      console.log("treatment.find failed")
//      res.status(500).send({ message: err });
//      return;
//      }
//      else {
//      console.log()
//      res.send('To powinna byc lista: ${treatment}');
//      }
//      });

try {
const list_tr = await Treatment.find();
res.json(list_tr);}
catch (err)
{
res.json({message: err});
}

    };


exports.treatment_details = async (req, res) => {
    try{
        const details = await Treatment.findById(req.params.treatmentId);
        res.json(details);
        }
    catch (err) {
    res.json({message: err});
    }
 }

 exports.delete_treatment = async (req, res) => {
    try{
         const removedTreatment = await Treatment.remove({_id: req.params.treatmentId})
           res.json(removedTreatment);
        }
    catch (err) {
    res.json({message: err});
    }
 }

  exports.update_treatment = async (req, res) => {
     try{
          const updatedTreatment = await Treatment.updateOne(
            {_id: req.params.treatmentId},
            {$set: {name: req.body.name}
            })
            res.json(updatedTreatment);
         }
     catch (err) {
     res.json({message: err});
     }
  }