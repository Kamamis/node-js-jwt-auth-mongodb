const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", controller.allAccess);

  app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);

  app.get(
    "/api/test/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
    app.get(
      "/api/test/registerModerator",
      [authJwt.verifyToken, authJwt.isAdmin],
      controller.registerModerator
    );


//    app.post(                             // sprawdzić jak pozwalać tylko zautoryzowanemu uzytkownikow dodawac treatment
//      "/api/test/add_treatment",
//      [authJwt.verifyToken, authJwt.isModerator],
//      controller.moderatorBoard
//    );
};
