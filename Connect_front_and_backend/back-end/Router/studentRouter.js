const express=require("express");
const route=express.Router();
const StuController =require("../controller/studentController");
 route.get("/home",StuController.homePage);
 route.get("/insert",StuController.InsePage);

 module.exports=route;