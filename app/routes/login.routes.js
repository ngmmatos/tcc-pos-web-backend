module.exports = app => {
    const login = require("../controllers/login.controller.js");
  
    var router = require("express").Router();
  
    router.post("/login", login.signin);
   
    router.post("/loginOauth", login.signinOauth);
  
    app.use('/RhBarbearia/', router);
  };


  