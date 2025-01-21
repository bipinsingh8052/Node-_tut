const express =require("express");
const route=express.Router();
const studentRoute=require("../Controller/myStudent");
route.get("/home",studentRoute.homePage);
route.get("/about",studentRoute.aboutPage);
route.get("/course",studentRoute.coursePage);
route.get("/fees",studentRoute.feesPage);

module.exports=route;