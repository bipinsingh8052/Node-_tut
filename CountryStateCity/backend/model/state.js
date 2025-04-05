const mongoose=require("mongoose");
const Schema=new mongoose.Schema({
    state:String,
    countryId:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"country"
    }]
})


module.exports=mongoose.model("state",Schema)