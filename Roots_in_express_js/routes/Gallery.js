const express =require ("express");
const route =express.Router();

route.get("/stugallery",(req,res)=>{
    res.send("<h1>This is my stugallery</h1>")
})
route.get("/companyimages",(req,res)=>{
    res.send("<h1>this is company images</h1>")
})
route.get ("/managerprotfolio",(req,res)=>{
    res.send("<h1>this is my manager protfolio</h1>")
})
route.get("/productimages",(req,res)=>{
    res.send("<h1>This is product images </h1>")
})

module.exports=route;