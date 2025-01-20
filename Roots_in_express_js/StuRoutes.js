const express =require("express");
const route =express.Router();

route.get ("/home",(req,res)=>{
    res.send("<h1>Hello my frnd the normal</h1>")
})
route.get("/about",(req,res)=>{
    res.send("<p>This is not a number in home page</p><h1>parshant panday</h1>")
})
route.get("/fees",(req,res)=>{
    res.send("<h5>Data base form student fees</h5>")
})
module.exports =route;