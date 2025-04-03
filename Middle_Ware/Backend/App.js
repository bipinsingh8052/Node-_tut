const express =require("express");

const app=express()
const bodyParser =require("body-parser");
const middleware =require("./middleware/middle")

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())
app.use((req,res,next)=>{
    console.log("first middle ware");next();
})


app.use((req,res,next)=>{
    console.log("first in home page :");
    req.name="bipinsingh";
    next();
})


 app.get("/student/homepage" ,middleware.filesave,(req,res,next)=>{
    console.log("run middle wire home page")
    console.log(req.filename,"this is file name in mDb in that save")
    console.log(req.name,"in first middle ware in that")
    res.send("home page")
    
   
    
 })


 


 app.get("/student/aboutpage",(req,res,next)=>{
    console.log("run middle wire about page")
    res.send("about page")
    next();
    
 })
 app.use((req,res,next)=>{
    console.log("about next middle ware");
    next();
 })

 app.use((req,res)=>{
    console.log("last middle ware");
 })


 app.get("/student/servicepage",(req,res,next)=>{
    console.log("run middle wire home page")
    res.send("about page")
    next();
    
 })
app.listen(8000,()=>{
    console.log("runn in 8000 port")
})