const mongoose =require("mongoose");
const Secham =new mongoose.Schema({
    name:String,
    age:Number,
    rollnumber:Number,
    course:String
})

module.exports= mongoose.model("Bipin",Secham);