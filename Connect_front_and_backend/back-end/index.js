const express =require("express");
const app =express();
const bodyParser =require("body-parser");
const router= require("./Router/studentRouter");
const mongoose =require("mongoose");
const cors =require("cors")
app.use(cors())
 mongoose.connect("mongodb://127.0.0.1:27017/firstDatabase")
 .then(()=>{
    console.log("this is connected");
 })
 .catch(()=>{
    console.log("Error")
 })


 // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())




app.use("/students",router);



app.listen(8080,()=>{
    console.log("run this method port 8080");
})