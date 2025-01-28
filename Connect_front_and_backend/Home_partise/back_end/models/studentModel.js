const mongoose =require("mongoose");
const Schema = new mongoose.Schema({
    name:String,
    address:String,
    number:Number,
    email:String,
    fees:Number
})

module.exports= mongoose.model("BipinSingh",Schema);