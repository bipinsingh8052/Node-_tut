const express=require("express");
const route=express.Router();
const StuController =require("../controller/studentController");
//  route.get("/home",StuController.homePage);
 route.post("/datasave",StuController.InsePage);
route.get("/display",StuController.display)

route.post("/search",StuController.search)
 module.exports=route;