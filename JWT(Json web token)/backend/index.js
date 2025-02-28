const express=require("express");
const app=express();
require("dotenv").config();
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const cors=require("cors");
const RouterStudent=require("./Roue/Student");

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

mongoose.connect(process.env.MB_Connected).then(()=>{
    console.log("This is DB run ");
})
.catch(()=>{
    console.log("This run Not DB mongoose");
})



app.use("/student",RouterStudent);

let port =process.env.PORT||8010
app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})