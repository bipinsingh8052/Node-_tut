const express =require("express");
const app =express();
const cors =require("cors");
const mongoose =require("mongoose");
const Router =require("./Router")
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://127.0.0.1:27017/state").then(()=>{
    console.log("Connected");
})
.catch(()=>{
    console.log("Not connected ")
})

app.use('/user',Router);

app.listen(9000,()=>{
    console.log("this is run on this posrt 9000");
})