module.exports = app => {
  const cliente = require("../controllers/cliente.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/cliente", cliente.create);

  // Retrieve all Tutorials
  router.get("/cliente", cliente.findAll);

  // Retrieve a single Tutorial with id
  router.get("/cliente/:id_cliente", cliente.findOne);

  // Delete a Tutorial with id
  router.delete("/cliente/:id_cliente", cliente.delete);

  app.use('/RhBarbearia/', router);
};
