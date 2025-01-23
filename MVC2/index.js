const express =require("express");
const app =express();
const collegeRouter =require("./Router/college")
const bipinR =require("./Router/bipinRoute")

const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/contact")
.then(()=>{
    console.log("succesful");
})
.catch(()=>{
    console.log("error");
})
app.set("view engine","ejs");

app.use("/college",collegeRouter);
// app.use("/bipin",bipinR)

app.listen(9000,()=>{
    console.log("this is port of 9000")
})