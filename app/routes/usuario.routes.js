module.exports = app => {
  const usuario = require("../controllers/usuario.controller.js");

  var router = require("express").Router();

  router.post("/usuario", usuario.create);

  router.get("/usuario", usuario.findAll);

  router.get("/usuario/:id_usuario", usuario.findOne);

  router.put("/usuario/:id_usuario", usuario.update);

  router.delete("/usuario/:id_usuario", usuario.delete);

  app.use('/RhBarbearia/', router);
};
