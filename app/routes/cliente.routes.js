const { authJwt } = require("../middleware");

module.exports = app => {
  const cliente = require("../controllers/cliente.controller.js");

  var router = require("express").Router();

  router.post("/cliente", [authJwt.verifyToken], cliente.create);

  router.get("/cliente", [authJwt.verifyToken], cliente.findAll);

  router.get("/cliente/:id_cliente", [authJwt.verifyToken], cliente.findOne);

  router.delete("/cliente/:id_cliente", [authJwt.verifyToken], cliente.delete);

  app.use('/RhBarbearia/', router);
};
