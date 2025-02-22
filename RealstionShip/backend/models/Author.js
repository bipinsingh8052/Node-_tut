const mongoose =require("mongoose");

const Schema =new mongoose.Schema({
    Writername:String,
    city:String,
    Country:String,
    email:String,
    Book_id:[{type:mongoose.Types.ObjectId,ref:"book"}]
})

module.exports=mongoose.model("author",Schema);