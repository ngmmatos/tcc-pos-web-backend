const { authJwt } = require("../middleware");

module.exports = app => {
  const statusRecebimento = require("../controllers/statusRecebimento.controller.js");

  var router = require("express").Router();

  router.post("/statusRecebimento", [authJwt.verifyToken], statusRecebimento.create);

  router.get("/statusRecebimento", [authJwt.verifyToken], statusRecebimento.findAll);

  router.get("/statusRecebimento/:id_status_recebimento", [authJwt.verifyToken], statusRecebimento.findOne);

  router.put("/statusRecebimento/:id_status_recebimento", [authJwt.verifyToken], statusRecebimento.update);

  router.delete("/statusRecebimento/:id_status_recebimento", [authJwt.verifyToken], statusRecebimento.delete);

  app.use('/RhBarbearia/', router);
};
