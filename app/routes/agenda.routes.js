module.exports = app => {
  const agenda = require("../controllers/agenda.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/agenda", agenda.create);

  // Retrieve all Tutorials
  router.get("/agenda", agenda.findAll);

  // Retrieve a single Tutorial with id
  router.get("/agenda/:id_agenda", agenda.findOne);

  // Update a Tutorial with id
  router.put("/agenda/:id_agenda", agenda.update);

  // Delete a Tutorial with id
  router.delete("/agenda/:id_agenda", agenda.delete);

  app.use('/RhBarbearia/', router);
};
