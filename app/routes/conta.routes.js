const { authJwt } = require("../middleware");

module.exports = app => {
  const conta = require("../controllers/conta.controller.js");

  var router = require("express").Router();

  router.post("/conta", [authJwt.verifyToken], conta.create);

  router.get("/conta", [authJwt.verifyToken], conta.findAll);

  router.get("/conta/:id_conta", [authJwt.verifyToken], conta.findOne);

  router.put("/conta/:id_conta", [authJwt.verifyToken], conta.update);

  router.delete("/conta/:id_conta", [authJwt.verifyToken], conta.delete);

  app.use('/RhBarbearia/', router);
};
