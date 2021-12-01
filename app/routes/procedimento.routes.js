module.exports = app => {
  const procedimento = require("../controllers/procedimento.controller.js");

  var router = require("express").Router();

  router.post("/procedimento", procedimento.create);

  router.get("/procedimento", procedimento.findAll);

  router.get("/procedimento/:id_procedimento", procedimento.findOne);

  router.put("/procedimento/:id_procedimento", procedimento.update);

  router.delete("/procedimento/:id_procedimento", procedimento.delete);

  app.use('/RhBarbearia/', router);
};