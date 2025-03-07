const express =require("express");
const Route =express.Router();
const Controller =require("../Controller/AuthorContoller")
const middleware =require("../middleware/images");
const MiddleWaresecond =require("../middleware/Secondimages")
Route.post("/home",middleware.single('images'),Controller.HomePage)

Route.get("/displayall",Controller.DisplayAuthor)


Route.get("/displayBooks" ,Controller.DisplayBook)
Route.post("/insertMoreBook",MiddleWaresecond.single('images') ,Controller.InsertMoreBook)
module.exports=Route;