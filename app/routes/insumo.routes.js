module.exports = app => {
  const insumo = require("../controllers/insumo.controller.js");

  var router = require("express").Router();

  router.post("/insumo", insumo.create);

  router.get("/insumo", insumo.findAll);

  router.get("/insumo/:id_insumo", insumo.findOne);

  router.put("/insumo/:id_insumo", insumo.update);

  router.delete("/insumo/:id_insumo", insumo.delete);

  app.use('/RhBarbearia/', router);
};