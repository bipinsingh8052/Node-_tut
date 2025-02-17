const express =require("express")
const route=express.Router();
const controller =require("../controller/controller")


route.post("/signUp",controller.loginPage)


module.exports=route;