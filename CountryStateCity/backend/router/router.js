const express =require("express");
const route =express.Router();
const Contro=require("../controller/controller")
route.post("/coutry",Contro.insertCountry);
route.get("/countrydata",Contro.GEtCOuntry)
route.post("/state",Contro.InsertState);
route.post("/searchState",Contro.SearchState)
route.post("/city",Contro.insertCity)
route.get("/display",Contro.Display)
module.exports=route;