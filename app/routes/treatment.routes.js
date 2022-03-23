const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/treatment.controller");

module.exports = function(app) {
//  app.use(function(req, res, next) {
//    res.header(
//      "Access-Control-Allow-Headers",
//      "x-access-token, Origin, Content-Type, Accept"
//    );
//    next();
//  });

  app.post(
    "/api/admin/add_treatment",
    controller.add_treatment
  );

 // app.post("/api/admin/add_treatment", [authJwt.verifyToken, authJwt.isModerator], controller.add_treatment);
};
