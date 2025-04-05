const mongoose=require("mongoose");
const Schema=new mongoose.Schema({
    coutry:String,
})


module.exports=mongoose.model("country",Schema)