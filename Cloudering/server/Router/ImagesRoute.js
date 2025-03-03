const express =require("express");
const route =express.Router();
const Controllerstudent=require("../Contoller/Images");

route.post("/insert",Controllerstudent.InserPage)
route.get("/display" ,Controllerstudent.Displaydata)
module.exports=route;