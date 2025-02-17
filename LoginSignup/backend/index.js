const express=require("express");
const app= express();
const mongoose =require("mongoose")
const cors =require("cors")
const bodyParser = require("body-parser")
const Router=require("./Router/login")
app.use(cors())


mongoose.connect("mongodb://localhost:27017/amit")
.then(()=>{console.log("DB connected SuccessFully")})
.catch(()=>{console.log("NOt connected DB ")})

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())






app.use("/info",Router)


app.listen(8080,()=>{
    console.log("http://localhost:8080")
})