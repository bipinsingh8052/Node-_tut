const http =require("http");
const cas =require("uppercase")
http.createServer(
    (req,res)=>{
        res.write("This si s a brother of frimd");
        res.write(cas("this is sencod data"))

        res.end()
    }
).listen(8000,()=>{

    console.log("run");
})