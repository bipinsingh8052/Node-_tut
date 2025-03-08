const express =require("express");
const app =express();
const mongoose=require("mongoose");
const  bodyParser =require("body-parser");
const cors =require("cors");
require("dotenv").config();
const cookies =require("cookie-parser")
const Router =require("./Routes/Route")

var session = require('express-session')

app.use(cookies())

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
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
  }))




let port =process.env.PORT||9009;
app.use("/author",Router)

app.get("/setCookies",(req,res)=>{
    res.cookie("studentname","Bipin singh")
    res.cookie("student","Bipin singh")
    res.cookie("name","Bipin singh")
    res.cookie("normal","Bipin singh")
    res.send("Okk this is Send the cookies in")
})

app.get("/getcooki" ,(req,res)=>{
    // res.cookie("studentname");
    // let a =req.cookies("studentname")
    console.log(res.cookies)
    res.send(req.cookies)
})

app.get("/deletecokki",(req,res)=>{
    console.log("okk delete");
    res.clearCookie("normal");
    res.clearCookie("name");
    res.send(req.cookies);
})

app.get("/setSession",(req,res)=>{
    console.log("okk session");
    req.session.myname="bipin singh yadav",
    req.session.myclass="bsc ";
    res.send("okk send the session")
})


app.get("/getsession",(req,res)=>{
    console.log("this is get sessoion");
    res.send(req.session)
})
app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})