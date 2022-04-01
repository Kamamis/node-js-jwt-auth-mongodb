const { verifySignUp } = require("../middlewares");
const { authJwt } = require("../middlewares");
const express = require('express');
const router = express.Router();
const controller = require("../controllers/treatment.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/treatment/add_treatment",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.add_treatment
  );

    app.get(
      "/api/treatment/list_treatment",
      controller.list_treatment
    );
      app.get(
      "/api/user/:treatmentId",
        controller.treatment_details
        )


      app.delete(
      "/api/user/:treatmentId",
        [authJwt.verifyToken],
        controller.delete_treatment
        )

        app.patch(
         "/api/user/:treatmentId",
         [authJwt.verifyToken],
         controller.update_treatment
        )

 // app.post("/api/admin/add_treatment", [authJwt.verifyToken, authJwt.isModerator], controller.add_treatment);
};
