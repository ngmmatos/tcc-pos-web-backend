const { authJwt } = require("../middleware");

module.exports = app => {
  const procedimentoAgendamento = require("../controllers/procedimentoAgendamento.controller.js");

  var router = require("express").Router();

  router.post("/procedimentoAgendamento", [authJwt.verifyToken], procedimentoAgendamento.create);

  router.get("/procedimentoAgendamento", [authJwt.verifyToken], procedimentoAgendamento.findAll);

  router.get("/procedimentoAgendamento/:id_procedimento_agendamento", [authJwt.verifyToken], procedimentoAgendamento.findOne);

  router.delete("/procedimentoAgendamento/:id_procedimento_agendamento", [authJwt.verifyToken], procedimentoAgendamento.delete);

  app.use('/RhBarbearia/', router);
};