const express =require("express");
const route =express.Router();
const ControllerStudent=require("../Controller/StudetController")

route.post("/signUp",ControllerStudent.SignUpPage);
route.post("/login",ControllerStudent.LoginPage);
route.post("/authoration",ControllerStudent.Authoreation)

module.exports=route;