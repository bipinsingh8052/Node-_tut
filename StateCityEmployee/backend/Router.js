const express=require("express");
const route =express.Router();
const Contr=require("./controller")

route.post("/state",Contr.stateInsert)

route.get("/showstate",Contr.ShowState)
route.post("/city",Contr.InsertCity)
route.post("/showcity",Contr.ShowCityname)
route.post("/name",Contr.EnterName);
route.get("/ShowAllData",Contr.ShowAllData);
route.post("/delete",Contr.DeletePage)
route.post("/editSearch",Contr.SearchEditPage)
route.post("/editit",Contr.EditData)
module.exports=route;