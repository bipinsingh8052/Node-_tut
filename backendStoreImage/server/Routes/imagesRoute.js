const express = require("express");
const route =express.Router();
const upload =require("../middleware/images")

const Contoller =require("../Controller/imageContoller")




route.post("/insert",upload.single('Employeeimage'), Contoller.InsertPage)
route.get("/display" ,Contoller.displayPage);


module.exports=route;