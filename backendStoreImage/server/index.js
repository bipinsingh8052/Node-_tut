const express =require("express");
const app=express();
const bodyParser =require("body-parser");
const mongoose =require("mongoose");
const cors =require("cors");
require("dotenv").config();

const Router =require("./Routes/imagesRoute")


app.use('/uploadPhoto', express.static('uploadPhoto'))
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())
mongoose.connect(process.env.MDCONNection).then(()=>{
    console.log("Connecting DB");
})
.catch(()=>{
    console.log("NOt connected the DB");
})


app.use ("/images",Router)
let port =process.env.PORT||9009;
app.listen(port,()=>{
    console.log(`http://locahost:${port}`);
})