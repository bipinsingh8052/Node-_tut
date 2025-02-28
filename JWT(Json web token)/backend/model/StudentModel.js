const mongoose =require("mongoose");
const StudentSchma= new mongoose.Schema({
    name:String,
    city:String,
    email:String,
    password:String

})


module.exports=mongoose.model("SignUp",StudentSchma);