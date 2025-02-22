const express =require("express");
const app=express();
const mongosee=require("mongoose");
const cors =require("cors");
const bodyParser=require("body-parser");
require("dotenv").config();
const Router =require("./Router/router")

app.use(cors());
mongosee.connect("mongodb://localhost:27017/author").then(()=>{
    console.log("run the connect is mDB")
})
.catch(()=>{
    console.log("not run mDB")
})

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())



app.use("/author",Router)
let port =process.env.PORT ||9000
console.log(port)
app.listen(port,()=>{
    console.log(`http://locahost:${port}`)
})
