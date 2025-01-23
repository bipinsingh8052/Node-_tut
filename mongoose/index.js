const express=require("express");
const app =express();
const studentRouter =require("./Router/studentRouter")
const bodyParser =require("body-parser")
const mongoose =require("mongoose");
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.set("view engine","ejs");


mongoose.connect("mongodb://127.0.0.1:27017/prashant")
.then(()=>{
    console.log("connect ");
})
.catch(()=>{
    console.log("error");
})





app.use("/Students",studentRouter)




app.listen(8080,()=>{
    console.log("this is posrt of 8080")
})