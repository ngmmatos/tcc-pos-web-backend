module.exports = app => {
  const administrador = require("../controllers/administrador.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/administrador", administrador.create);

  // Retrieve all Tutorials
  router.get("/administrador", administrador.findAll);

  // Retrieve a single Tutorial with id
  router.get("/administrador/:id_adm", administrador.findOne);

  // Delete a Tutorial with id
  router.delete("/administrador/:id_adm", administrador.delete);

  app.use('/RhBarbearia/', router);
};
