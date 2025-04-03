const express=require("express");
const app= express();
const mongoose =require("mongoose")
const cors =require("cors")
const bodyParser = require("body-parser")
const Router=require("./Router/login")
require("dotenv").config()
app.use(cors())


mongoose.connect("mongodb://127.0.0.1:27017/amit")
.then(()=>{console.log("DB connected SuccessFully")})
.catch(()=>{console.log("NOt connected DB ")})

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


let port =process.env.PORT || 8000
console.log(port)




app.use("/info",Router)


app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})