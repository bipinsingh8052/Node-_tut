const mongoose =require("mongoose");
const Schema=new mongoose.Schema({
    username:String,
    email:String
})


module.exports=mongoose.model("sign" ,Schema);