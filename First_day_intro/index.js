const express=require("express");
const app=express();
app.get("/",(req,res)=>{
    res.send("this is not a file");
})
app.get("/about",(req,res)=>{
    res.send("this is about page")
})

app.listen(8000,()=>{
    console.log("server run on 8000 port");
})