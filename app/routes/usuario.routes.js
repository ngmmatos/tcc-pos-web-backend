const { authJwt } = require("../middleware");

module.exports = app => {
  const usuario = require("../controllers/usuario.controller.js");

  var router = require("express").Router();

  router.post("/usuario", [authJwt.verifyToken], usuario.create);

  router.get("/usuario", [authJwt.verifyToken], usuario.findAll);

  router.get("/usuario/:id_usuario", [authJwt.verifyToken], usuario.findOne);

  router.put("/usuario/:id_usuario", [authJwt.verifyToken], usuario.update);

  router.delete("/usuario/:id_usuario", [authJwt.verifyToken], usuario.delete);

  app.use('/RhBarbearia/', router);
};
