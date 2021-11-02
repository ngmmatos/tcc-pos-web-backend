module.exports = app => {
  const usuario = require("../controllers/usuario.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", usuario.create);

  // Retrieve all Tutorials
  router.get("/", usuario.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id_usuario", usuario.findOne);

  // Update a Tutorial with id
  router.put("/:id_usuario", usuario.update);

  // Delete a Tutorial with id
  router.delete("/:id_usuario", usuario.delete);

  app.use('/api/usuario', router);
};
