module.exports = app => {
  const barbeiro = require("../controllers/barbeiro.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/barbeiro", barbeiro.create);

  // Retrieve all Tutorials
  router.get("/barbeiro", barbeiro.findAll);

  // Retrieve a single Tutorial with id
  router.get("/barbeiro/:id_barbeiro", barbeiro.findOne);

  // Delete a Tutorial with id
  router.delete("/barbeiro/:id_barbeiro", barbeiro.delete);

  app.use('/RhBarbearia/', router);
};
