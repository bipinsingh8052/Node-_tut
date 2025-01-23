const express=require("express");
const route=express.Router();
const Bipinr=require("../Controller/BipinCont")
route.get("/home",Bipinr.homepage);
route.get("/about",Bipinr.aboutpage);




module.exports=route;