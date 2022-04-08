const { authJwt } = require("../middleware");

module.exports = app => {
  const statusAtendimento = require("../controllers/statusAtendimento.controller.js");

  var router = require("express").Router();

  router.post("/statusAtendimento", [authJwt.verifyToken], statusAtendimento.create);

  router.get("/statusAtendimento", [authJwt.verifyToken], statusAtendimento.findAll);

  router.get("/statusAtendimento/:id_status_atendimento", [authJwt.verifyToken], statusAtendimento.findOne);

  router.put("/statusAtendimento/:id_status_atendimento", [authJwt.verifyToken], statusAtendimento.update);

  router.delete("/statusAtendimento/:id_status_atendimento", [authJwt.verifyToken], statusAtendimento.delete);

  app.use('/RhBarbearia/', router);
};
