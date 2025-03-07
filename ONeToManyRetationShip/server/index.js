const express =require("express");
const app =express();
const mongoose=require("mongoose");
const  bodyParser =require("body-parser");
const cors =require("cors");
require("dotenv").config();

const Router =require("./Routes/Route")





// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())
app.use(cors());
app.use('/uploads', express.static('uploads'))
mongoose.connect(process.env.DBCONNECTED).then(()=>{console.log("Db is Connected")})
.catch(()=>{
    console.log("NOt conneccted the DB")
})





let port =process.env.PORT||9009;
app.use("/author",Router)

app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})