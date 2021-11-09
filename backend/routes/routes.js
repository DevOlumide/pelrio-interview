const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const userModelSchemaCopy = require("../models/userModels")

router.post("/firstLogin", (request, response) => {
  userModelSchemaCopy.find({firstName: request.body.firstName, lastName: request.body.lastName}, (err,result) => {
    if(result){
      response.send({userExist: "true"});
      console.log(result);
    }
  const registered = new userModelSchemaCopy({
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    email: request.body.email,
    phone: request.body.phone,
  });
  registered.save();
  
  });
});

router.post("/fetch", (request, response) => {
  
  userModelSchemaCopy.find({firstName: request.body.firstName}, (err, result) => {
    if(err){
      console.log(err)
    }
    response.send(result);
  });
});

module.exports = router;