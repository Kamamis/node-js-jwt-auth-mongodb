const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/physio.controller");

module.exports = function(app) {
//  app.use(function(req, res, next) {
//    res.header(
////      "Access-Control-Allow-Headers",
////      "x-access-token, Origin, Content-Type, Accept"
//    );
//    next();
//  });

  app.post(
    "/api/add_physio",
//    [
//      verifySignUp.checkDuplicateUsernameOrEmail,
//      verifySignUp.checkRolesExisted
//    ],
    controller.add_physio
  );

  app.post("/api/add_physio", controller.add_physio);
};
