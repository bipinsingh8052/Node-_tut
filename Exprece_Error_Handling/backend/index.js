const express =require("express");
const app =express();
const bodyParser =require("body-parser");

const mongoose =require("mongoose")
const cors =require("cors");

const router=require("./Router/User")
app.use(cors())





// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

// app.use((req,res,next)=>{
//     console.log("middleware first");
//     next();
// })


// app.get('/homepage',async(req,res)=>{

mongoose.connect("mongodb://127.0.0.1:27017/harshit").then(()=>{
    console.log("conncent")
})
.catch(()=>{
    console.log("not connect")
})


//     // let status=false;
//     // if(status){
//     //     res.status(200).send("this is home page")
//     // }
//     // else{
//     //     res.status(400).send("this is home page")
//     // }



//     try {
        
//         console.log("try section");
//         // throw new Error("This is my connected error");
//         res.status(200).send("this is my sending data");
//     } catch (error) {

//         // console.log( "error")
//         res.status(400).send({msg:"this is fetch error"})
//         // console.log(error);
        
//     }
// })




app.use("/user",router)




app.listen(9090,()=>{
    console.log("http://localhost:8000");
})