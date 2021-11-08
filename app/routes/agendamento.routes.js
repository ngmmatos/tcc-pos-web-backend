module.exports = app => {
  const agendamento = require("../controllers/agendamento.controller.js");

  var router = require("express").Router();

  router.post("/agendamento", agendamento.create);

  router.get("/agendamento", agendamento.findAll);

  router.get("/agendamento/:id_agendamento", agendamento.findOne);

  router.put("/agendamento/:id_agendamento", agendamento.update);

  router.delete("/agendamento/:id_agendamento", agendamento.delete);

  app.use('/RhBarbearia/', router);
};
