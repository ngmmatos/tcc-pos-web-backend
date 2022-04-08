const { authJwt } = require("../middleware");

module.exports = app => {
  const atendimento = require("../controllers/atendimento.controller.js");

  var router = require("express").Router();

  router.post("/atendimento", [authJwt.verifyToken], atendimento.create);

  router.get("/atendimento", [authJwt.verifyToken], atendimento.findAll);

  router.get("/atendimento/:id_atendimento", [authJwt.verifyToken], atendimento.findOne);

  router.put("/atendimento/:id_atendimento", [authJwt.verifyToken], atendimento.update);

  router.delete("/atendimento/:id_atendimento", [authJwt.verifyToken], atendimento.delete);

  app.use('/RhBarbearia/', router);
};
