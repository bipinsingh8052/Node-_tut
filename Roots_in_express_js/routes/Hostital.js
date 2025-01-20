const express =require("express");
const route=express.Router();
route.get("/home",(req,res)=>{
    res.send("<h1>This is hospitals home page</h1>")
})
route.get("/patient",(req,res)=>{
    res.send("<h1>Hello world this is patient page</h1>")
})
route.get("/admit",(req,res)=>{
    res.send("<h1>this is admit page in hospital pages</h1>")
})
route.get("/save",(req,res)=>{
    res.send("<h1>This is save page in the hospital</h1>")
})
module.exports=route;