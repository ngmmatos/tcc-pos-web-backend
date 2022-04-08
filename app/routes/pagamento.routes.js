const { authJwt } = require("../middleware");

module.exports = app => {
  const pagamento = require("../controllers/pagamento.controller.js");

  var router = require("express").Router();

  router.post("/pagamento", [authJwt.verifyToken], pagamento.create);

  router.get("/pagamento", [authJwt.verifyToken], pagamento.findAll);

  router.get("/pagamento/:id_pagamento", [authJwt.verifyToken], pagamento.findOne);

  router.put("/pagamento/:id_pagamento", [authJwt.verifyToken], pagamento.update);

  router.delete("/pagamento/:id_pagamento", [authJwt.verifyToken], pagamento.delete);

  app.use('/RhBarbearia/', router);
};
