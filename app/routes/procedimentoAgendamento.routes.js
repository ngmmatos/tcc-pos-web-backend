const { authJwt } = require("../middleware");

module.exports = app => {
  const procedimentoAgendamento = require("../controllers/procedimentoAgendamento.controller.js");

  var router = require("express").Router();

  router.post("/procedimentoAgendamento", [authJwt.verifyToken], [authJwt.isAdmin], procedimentoAgendamento.create);

  router.get("/procedimentoAgendamento", [authJwt.verifyToken], [authJwt.isAdmin], procedimentoAgendamento.findAll);

  router.get("/procedimentoAgendamento/:id_procedimento_agendamento", [authJwt.verifyToken], [authJwt.isAdmin], procedimentoAgendamento.findOne);

  router.delete("/procedimentoAgendamento/:id_procedimento_agendamento", [authJwt.verifyToken], [authJwt.isAdmin], procedimentoAgendamento.delete);

  app.use('/RhBarbearia/', router);
};