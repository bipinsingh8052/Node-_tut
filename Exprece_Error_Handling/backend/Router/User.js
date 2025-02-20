const express=require("express");

const route =express.Router();
const controller =require("../Contoller/user")

route.post("/sign",controller.inserPage)

route.get("/user",controller.displaypage)
module.exports=route;