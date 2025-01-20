const express =require("express");
const port =9000;
const app =express();
app.get ("/student/home",(req,res)=>{
    res.send("<h1>Hello my frnd the normal</h1>")
})
app.get("/student/about",(req,res)=>{
    res.send("<p>This is not a number in home page</p><h1>parshant panday</h1>")
})
app.get("/student/fees",(req,res)=>{
    res.send("<h5>Data base form student fees</h5>")
})


app.get("/teacher/home",(req,res)=>{
    res.send("<p>normal data teacher</p>")
})
app.get ("/teacher/about",(req,res)=>{
    res.send("this is teacher about");
})
app.get("/teacher/loan",(req,res)=>{
    res.send("<p>This is teacher loan</p>")
})





app.listen(port,()=>{
    console.log(`this is server ${port}`)
})