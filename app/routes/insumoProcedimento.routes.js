module.exports = app => {
  const insumoProcedimento = require("../controllers/insumoProcedimento.controller.js");

  var router = require("express").Router();

  router.post("/insumoProcedimento", insumoProcedimento.create);

  router.get("/insumoProcedimento", insumoProcedimento.findAll);

  router.get("/insumoProcedimento/:id_insumo_procedimento", insumoProcedimento.findOne);

  router.delete("/insumoProcedimento/:id_insumo_procedimento", insumoProcedimento.delete);

  app.use('/RhBarbearia/', router);
};