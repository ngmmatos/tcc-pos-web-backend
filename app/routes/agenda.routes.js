module.exports = app => {
  const agenda = require("../controllers/agenda.controller.js");

  var router = require("express").Router();

  router.post("/agenda", agenda.create);

  router.get("/agenda", agenda.findAll);

  router.get("/agenda/:id_agenda", agenda.findOne);

  router.put("/agenda/:id_agenda", agenda.update);

  router.delete("/agenda/:id_agenda", agenda.delete);

  app.use('/RhBarbearia/', router);
};
