const { authJwt } = require("../middleware");

module.exports = app => {
  const insumoProcedimento = require("../controllers/insumoProcedimento.controller.js");

  var router = require("express").Router();

  router.post("/insumoProcedimento", [authJwt.verifyToken], insumoProcedimento.create);

  router.get("/insumoProcedimento", [authJwt.verifyToken], insumoProcedimento.findAll);

  router.get("/insumoProcedimento/:id_insumo_procedimento", [authJwt.verifyToken], insumoProcedimento.findOne);

  router.delete("/insumoProcedimento/:id_insumo_procedimento", [authJwt.verifyToken], insumoProcedimento.delete);

  app.use('/RhBarbearia/', router);
};