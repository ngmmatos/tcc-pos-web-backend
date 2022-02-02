const { authJwt } = require("../middleware");

module.exports = app => {
  const administrador = require("../controllers/administrador.controller.js");

  var router = require("express").Router();

  router.post("/administrador", [authJwt.verifyToken], [authJwt.isAdmin], administrador.create);

  router.get("/administrador", [authJwt.verifyToken], [authJwt.isAdmin], administrador.findAll);

  router.get("/administrador/:id_adm", [authJwt.verifyToken], [authJwt.isAdmin], administrador.findOne);

  router.delete("/administrador/:id_adm", [authJwt.verifyToken], [authJwt.isAdmin], administrador.delete);

  app.use('/RhBarbearia/', router);
};