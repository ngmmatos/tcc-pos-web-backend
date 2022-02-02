const { authJwt } = require("../middleware");

module.exports = app => {
  const agenda = require("../controllers/agenda.controller.js");

  var router = require("express").Router();

  router.post("/agenda", [authJwt.verifyToken], [authJwt.isBarber], agenda.create);

  router.get("/agenda", [authJwt.verifyToken], [authJwt.isBarber], agenda.findAll);

  router.get("/agenda/:id_agenda", [authJwt.verifyToken], [authJwt.isBarber], agenda.findOne);

  router.put("/agenda/:id_agenda", [authJwt.verifyToken], [authJwt.isBarber], agenda.update);

  router.delete("/agenda/:id_agenda", [authJwt.verifyToken], [authJwt.isBarber], agenda.delete);

  app.use('/RhBarbearia/', router);
};
