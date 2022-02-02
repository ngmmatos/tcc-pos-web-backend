const { authJwt } = require("../middleware");

module.exports = app => {
  const procedimento = require("../controllers/procedimento.controller.js");

  var router = require("express").Router();

  router.post("/procedimento", [authJwt.verifyToken], [authJwt.isAdmin], procedimento.create);

  router.get("/procedimento", [authJwt.verifyToken], [authJwt.isAdmin], procedimento.findAll);

  router.get("/procedimento/:id_procedimento", [authJwt.verifyToken], [authJwt.isAdmin], procedimento.findOne);

  router.put("/procedimento/:id_procedimento", [authJwt.verifyToken], [authJwt.isAdmin], procedimento.update);

  router.delete("/procedimento/:id_procedimento", [authJwt.verifyToken], [authJwt.isAdmin], procedimento.delete);

  app.use('/RhBarbearia/', router);
};