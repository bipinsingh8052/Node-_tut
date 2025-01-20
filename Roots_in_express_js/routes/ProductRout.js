



const express =require("express");
const route =express.Router();

route.get("/location",(req,res)=>{
    res.send("<h1>This is my location page</h1>")
})



route.get("/sales",(req,res)=>{
    res.send("<h1>This is my sales page</h1>")
})

route.get("/stock",(req,res)=>{

    res.send("<h1>This is my stock page</h1>")
})
route.get("/price",(req,res)=>{
    res.send("<h1>This is my price page</h1>")

})

module.exports =route;