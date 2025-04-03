const mongoose=require("mongoose");
const Schema =new mongoose.Schema({
    state:String
})



module.exports=mongoose.model("state",Schema);