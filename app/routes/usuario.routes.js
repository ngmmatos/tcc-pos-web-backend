module.exports = app => {
  const usuarios = require("../controllers/usuario.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", usuarios.create);

  // Retrieve all Tutorials
  router.get("/", usuarios.findAll);

  // Retrieve all published Tutorials
  router.get("/nome", usuarios.findAllNome);

  // Retrieve a single Tutorial with id
  router.get("/:id_usuario", usuarios.findOne);

  // Update a Tutorial with id
  router.put("/:id_usuario", usuarios.update);

  // Delete a Tutorial with id
  router.delete("/:id_usuario", usuarios.delete);

  app.use('/api/usuarios', router);
};
