// Read file
// when you read any file 
const http = require ("http");
const fs =require ("fs");
http.createServer((req,res)=>{
    fs.readFile("Data_fille.txt",(error ,data)=>{
        if(error) throw error;
        res.write(data);
        res.end("end the page");
    })
}
).listen(8800);