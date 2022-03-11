const { authJwt } = require("../middleware");

module.exports = app => {
  const barbeiro = require("../controllers/barbeiro.controller.js");

  var router = require("express").Router();

  router.post("/barbeiro", [authJwt.verifyToken], [authJwt.isAdmin], barbeiro.create);

  router.get("/barbeiro", [authJwt.verifyToken], barbeiro.findAll);

  router.get("/barbeiro/:id_barbeiro", [authJwt.verifyToken], barbeiro.findOne);

  router.delete("/barbeiro/:id_barbeiro", [authJwt.verifyToken], [authJwt.isAdmin], barbeiro.delete);

  app.use('/RhBarbearia/', router);
};
