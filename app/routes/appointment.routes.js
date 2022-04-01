const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/appointment.controller");
const { authJwt } = require("../middlewares");
const express = require('express');
const router = express.Router();

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/user/add_appointment",
     [authJwt.verifyToken],
    controller.add_appointment
  );

  //app.post("/api/user/add_appointment", controller.add_appointment);
  app.get(
  "/api/user/list_appointment",
    [authJwt.verifyToken],
    controller.list_appointment
    )


  app.get(
  "/api/user/:appointmentId",
    [authJwt.verifyToken],
    controller.appointment_details
    )


  app.delete(
  "/api/user/:appointmentId",
    [authJwt.verifyToken],
    controller.delete_appointment
    )

  app.patch(
  "/api/user/:appointmentId",
    [authJwt.verifyToken],
    controller.delete_appointment
    )
};