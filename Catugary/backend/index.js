const express =require("express");
const app =express();
const  mongoose =require("mongoose");
const bodyParser =require("body-parser");
const cors =require("cors");
const router =require("./Router/product")


app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())

// parse application/json
app.use(bodyParser.json())

mongoose.connect("mongodb://127.0.0.1:27017/bipin").then(()=>{console.log("THis is database is connected")})
.catch(()=>{
    console.log("Data base is not connected")
})

app.use("/products",router)

app.listen(8000,()=>{
    console.log("THis is run on http 8000")
})