const { authJwt } = require("../middleware");

module.exports = app => {
  const insumo = require("../controllers/insumo.controller.js");

  var router = require("express").Router();

  router.post("/insumo", [authJwt.verifyToken], insumo.create);

  router.get("/insumo", [authJwt.verifyToken], insumo.findAll);

  router.get("/insumo/:id_insumo", [authJwt.verifyToken], insumo.findOne);

  router.put("/insumo/:id_insumo", [authJwt.verifyToken], insumo.update);

  router.delete("/insumo/:id_insumo", [authJwt.verifyToken], insumo.delete);

  app.use('/RhBarbearia/', router);
};