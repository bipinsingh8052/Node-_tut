const express =require("express");
const route =express.Router();
const StudentInfo =require("../Controller/Student")
route.get("/homepage",StudentInfo.home)
route.get("/aboutstu",StudentInfo.About)
route.get("/course",StudentInfo.course)
route.get("/ourfees",StudentInfo.ourfees)


module.exports=route;
