module.exports = app => {
  const procedimentoAgendamento = require("../controllers/procedimentoAgendamento.controller.js");

  var router = require("express").Router();

  router.post("/procedimentoAgendamento", procedimentoAgendamento.create);

  router.get("/procedimentoAgendamento", procedimentoAgendamento.findAll);

  router.get("/procedimentoAgendamento/:id_procedimento_agendamento", procedimentoAgendamento.findOne);

  router.delete("/procedimentoAgendamento/:id_procedimento_agendamento", procedimentoAgendamento.delete);

  app.use('/RhBarbearia/', router);
};