const express=require("express");
const app =express();
const mongoose =require("mongoose")
const cors =require("cors")
app.use(cors())
require('dotenv').config()


mongoose.connect(process.env.DB_Connected).then(()=>{
    console.log("run run DB connected");
}).catch(()=>{
    console.log("Not Run DB in connected")
})


let port =process.env.PORT||8000
console.log(port)
app.listen(port,()=>{
    console.log(`server run on port no: ${port}`);
    
})