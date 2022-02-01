const { authJwt } = require("../middleware");

module.exports = app => {
  const fornecedor = require("../controllers/fornecedor.controller.js");

  var router = require("express").Router();

  router.post("/fornecedor", [authJwt.verifyToken], fornecedor.create);

  router.get("/fornecedor", [authJwt.verifyToken], fornecedor.findAll);

  router.get("/fornecedor/:id_fornecedor", [authJwt.verifyToken], fornecedor.findOne);

  router.put("/fornecedor/:id_fornecedor", [authJwt.verifyToken], fornecedor.update);

  router.delete("/fornecedor/:id_fornecedor", [authJwt.verifyToken], fornecedor.delete);

  app.use('/RhBarbearia/', router);
};