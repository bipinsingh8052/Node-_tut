const express =require("express")
const route=express.Router();
const controller =require("../controller/controller")


route.post("/signUp",controller.loginPage)
route.post("/login", controller.loginPageinSingup)

module.exports=route;