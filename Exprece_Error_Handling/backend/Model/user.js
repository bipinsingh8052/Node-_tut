const mongoose =require("mongoose");
const Schema=new mongoose.Schema({
    firstname:String,
    lastname:String,
    Userid:{
        type:mongoose.Schema.ObjectId,
        ref:"sign"
    }
})


module.exports=mongoose.model("user" ,Schema);
