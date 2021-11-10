module.exports = app => {
  const fornecedor = require("../controllers/fornecedor.controller.js");

  var router = require("express").Router();

  router.post("/fornecedor", fornecedor.create);

  router.get("/fornecedor", fornecedor.findAll);

  router.get("/fornecedor/:id_fornecedor", fornecedor.findOne);

  router.put("/fornecedor/:id_fornecedor", fornecedor.update);

  router.delete("/fornecedor/:id_fornecedor", fornecedor.delete);

  app.use('/RhBarbearia/', router);
};