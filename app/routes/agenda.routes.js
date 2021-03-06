const { authJwt } = require("../middleware");

module.exports = app => {
  const agenda = require("../controllers/agenda.controller.js");

  var router = require("express").Router();

  router.post("/agenda", [authJwt.verifyToken], [authJwt.isBarber], agenda.create);

  router.post("/agenda/create", [authJwt.verifyToken], [authJwt.isBarber], agenda.createAll);

  router.get("/agenda", [authJwt.verifyToken], agenda.findAll);

  router.get("/agenda/:id_agenda", [authJwt.verifyToken], agenda.findOne);

  router.put("/agenda/:id_agenda", [authJwt.verifyToken], agenda.update);

  router.delete("/agenda/:id_agenda", [authJwt.verifyToken], [authJwt.isBarber], agenda.delete);

  app.use('/RhBarbearia/', router);
};
