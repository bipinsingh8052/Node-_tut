const express=require("express");
const app =express();
const mongoose =require("mongoose");
const bodyParser =require("body-parser");
const cors=require("cors");
require("dotenv").config();
const Router=require("./Router/ImagesRoute")

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())
mongoose.connect(process.env.MONGDB).then(()=>{
    console.log("Mongoose Is connected");
})
.catch(()=>{
    console.log("mongoose Is NOt connecteed");
})

let port =process.env.Port||8000;
app.use("/student",Router)
app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})