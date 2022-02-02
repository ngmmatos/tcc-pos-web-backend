const { authJwt } = require("../middleware");

module.exports = app => {
  const fornecedor = require("../controllers/fornecedor.controller.js");

  var router = require("express").Router();

  router.post("/fornecedor", [authJwt.verifyToken], [authJwt.isAdmin], fornecedor.create);

  router.get("/fornecedor", [authJwt.verifyToken], [authJwt.isAdmin], fornecedor.findAll);

  router.get("/fornecedor/:id_fornecedor", [authJwt.verifyToken], [authJwt.isAdmin], fornecedor.findOne);

  router.put("/fornecedor/:id_fornecedor", [authJwt.verifyToken], [authJwt.isAdmin], fornecedor.update);

  router.delete("/fornecedor/:id_fornecedor", [authJwt.verifyToken], [authJwt.isAdmin], fornecedor.delete);

  app.use('/RhBarbearia/', router);
};