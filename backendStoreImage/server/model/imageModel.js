const mongoose =require("mongoose");
const Schema = new mongoose.Schema({
    name:String,
    work:String,
    address:String,
    number:Number,
    images:String
})


module.exports= mongoose.model("bipin",Schema);