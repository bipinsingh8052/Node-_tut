const mongoose=require("mongoose");
const Schema =new mongoose.Schema({
    city:String,
    stateId:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"state"
    }]

})


module.exports=mongoose.model("city",Schema);