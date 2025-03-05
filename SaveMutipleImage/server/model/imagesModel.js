const mongoose =require("mongoose");
const Schema =new mongoose.Schema({
    name:String,
    brandname:String,
    price:Number,
    details:String,
    defaultimg:String,
    all_images:[String]
})


module.exports=mongoose.model("Bipin",Schema)