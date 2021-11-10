module.exports = app => {
  const barbeiro = require("../controllers/barbeiro.controller.js");

  var router = require("express").Router();

  router.post("/barbeiro", barbeiro.create);

  router.get("/barbeiro", barbeiro.findAll);

  router.get("/barbeiro/:id_barbeiro", barbeiro.findOne);

  router.delete("/barbeiro/:id_barbeiro", barbeiro.delete);

  app.use('/RhBarbearia/', router);
};
