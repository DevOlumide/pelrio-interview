const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const userModelSchemaCopy = require("../models/userModels");

router.post("/firstLogin", (request, response) => {
      userModelSchemaCopy.find({firstName: request.body.firstName, lastName: request.body.lastName}, (err,result) => {
  if(err){
      console.log(err);
    }
  if(result.length == 0){
    
    const registered = new userModelSchemaCopy({
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    email: request.body.email,
    phone: request.body.phone,
  });
    registered.save().then((data) => {
    console.log(registered);
    response.json(data);
    });
       }
        
    });
})

router.post("/fetch", (request, response) => {
  
  userModelSchemaCopy.find({firstName: request.body.firstName}, (err, result) => {
    if(err){
      console.log(err)
    }
    response.send(result);
  });
});

router.get("/item", (req,res) => {
userModelSchemaCopy.find({}, (err, result) => {
    if(err){
      console.log(err)
    }
    res.send(result)
  })
  userModelSchemaCopy.deleteMany({}, (err1, result1) => {
    if(!err1){
      console.log(result1);
    }
  });
})
module.exports = router;