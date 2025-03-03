const mongoose =require("mongoose");
const Schema =new mongoose.Schema({
    name:String,
    rollno:Number,
    class:String,
    imageurl:String,

})

module.exports=mongoose.model("students",Schema);