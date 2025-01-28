const express =require ("express");
const app=express();
const mongoose =require("mongoose");
const bodyParser =require("body-parser");
const cors =require("cors")
const StuRouter =require("./Router/StudentRouter")
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())
mongoose.connect("mongodb://127.0.0.1:27017/partice")
.then(()=>{
    console.log("Connected successful");
})
.catch(()=>{
    console.log("error not connect");
})



app.use("/student",StuRouter)
app.listen(8000,()=>{
    console.log("working on this port 8000");
})