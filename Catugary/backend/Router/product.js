const express =require("express");
const route =express.Router();
const constroller =require("../controller/Product")


route.post("/add",constroller.insertPage)
route.get("/catu" ,constroller.catguryPage)
route.post("/subcatg",constroller.SubcatguPage)

module.exports=route;