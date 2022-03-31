const { authJwt } = require("../middleware");

module.exports = app => {
  const recuperaSenha = require("../controllers/recuperaSenha.controller.js");

  var router = require("express").Router();

  router.get("/recuperasenha", [authJwt.verifyLocal], recuperaSenha.findOne);

  router.put("/recuperasenha/:id_usuario", [authJwt.verifyLocal], recuperaSenha.update);

  app.use('/RhBarbearia/', router);
};
