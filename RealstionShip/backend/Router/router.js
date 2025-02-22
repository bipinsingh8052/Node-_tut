const express =require("express");
const route =express.Router();
const contoller =require('../Controller/Controller')
route.post("/writer",contoller.authorPage)
route.get("/display",contoller.display)
route.post("/book",contoller.bookinsert)
route.get("/alldata",contoller.alldataDispaly)

module.exports=route