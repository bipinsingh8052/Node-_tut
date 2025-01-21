// model views controller
const express =require("express");
const app=express();
const studentRoute=require("./Router/Student")
const AllStudent=require("./Router/myStudent")
app.set("view engine","ejs")
app.use("/students",studentRoute)
app.use("/allStudent",AllStudent)
app.listen(8000,()=>{
    console.log("this is 8000 server page")
})