const express =require("express");
const route =express.Router();
const StudentCont =require("../controller/studentController");


route.get("/home",StudentCont.homePage);
route.get("/insert",StudentCont.insertPage)
route.get("/display",StudentCont.displayPage)
route.post("/save",StudentCont.savepage);


module.exports=route;