const express =require("express");

const route =express.Router();
const Controller=require("../Controller/imagesController")
const middleware=require("../middleware/stroage")


route.post("/saveimage",middleware.array("images",5),Controller.SaveImage)

route.get("/display",Controller.DisplayPages)
route.post('/search',Controller.SearchPage)

module.exports=route;