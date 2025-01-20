const http =require("http");
const emp=require("./Student.js")
http.createServer(
    function(req,res){
        res.write("<h1>this is my first program </h1>");
        res.write(emp.empDetail())
        res.write(emp.empSalary())
        res.write(emp.workExprence())
        res.end();
    }).listen(8080,()=>{console.log("hellow page 8080 ")});