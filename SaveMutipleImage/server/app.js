const express =require("express");
const app =express();
require("dotenv").config();
const mongoose =require("mongoose");
const bodyParser =require("body-parser");
const cors=require("cors");
const Router =require("./Router/Router")


app.use(cors());
app.use('/uploads', express.static('uploads'))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())


mongoose.connect(process.env.DBCONNECTED).then(()=>{
    console.log("This is DB is Connected");
})
.catch(()=>{
    console.log("DataBase is not connected");
})




app.use("/images",Router)


let port =process.env.PORT||8090;
app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})