const { authJwt } = require("../middleware");

module.exports = app => {
  const recebimento = require("../controllers/recebimento.controller.js");

  var router = require("express").Router();

  router.post("/recebimento", [authJwt.verifyToken], recebimento.create);

  router.get("/recebimento", [authJwt.verifyToken], recebimento.findAll);

  router.get("/recebimento/:id_recebimento", [authJwt.verifyToken], recebimento.findOne);

  router.put("/recebimento/:id_recebimento", [authJwt.verifyToken], recebimento.update);

  router.delete("/recebimento/:id_recebimento", [authJwt.verifyToken], recebimento.delete);

  app.use('/RhBarbearia/', router);
};
