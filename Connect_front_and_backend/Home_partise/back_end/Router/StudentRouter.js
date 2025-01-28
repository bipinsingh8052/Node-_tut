const express=require("express");
const route =express.Router();
const studenController =require("../controller/studentController");
route.get("/home",studenController.homePage);
route.post("/insert",studenController.insertPage);
route.get("/display",studenController.displayPage);

route.get("/contact",studenController.contactPage);
route.post("/search",studenController.searchpage)


module.exports=route