const { authJwt } = require("../middleware");

module.exports = app => {
  const agendamento = require("../controllers/agendamento.controller.js");

  var router = require("express").Router();

  router.post("/agendamento", [authJwt.verifyToken], agendamento.create);

  router.get("/agendamento", [authJwt.verifyToken], agendamento.findAll);

  router.get("/agendamento/:id_agendamento", [authJwt.verifyToken], agendamento.findOne);

  router.put("/agendamento/:id_agendamento", [authJwt.verifyToken], agendamento.update);

  router.delete("/agendamento/:id_agendamento", [authJwt.verifyToken], agendamento.delete);

  app.use('/RhBarbearia/', router);
};
