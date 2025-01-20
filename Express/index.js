const express =require("express");
const app =express();
app.get ("/",(req,res)=>{
    res.send("<h1>Hello my frnd the normal</h1>")
})
app.get("/home",(req,res)=>{
    res.send("<p>This is not a number in home page</p><h1>parshant panday</h1>")
})
app.post("/data",(req,res)=>{
    res.send("<h5>Data base form</h5>")
})
app.put("/firstput",(req,res)=>{
    res.send("<p>normal data</p>")
})





app.listen(8000,()=>{
    console.log("work")
})