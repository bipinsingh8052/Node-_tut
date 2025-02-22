const express =require("express");
const route =express.Router();
const contoller =require('../Controller/Controller')
route.post("/writer",contoller.authorPage)
route.get("/display",contoller.display)

module.exports=route