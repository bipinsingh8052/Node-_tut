const mongoose =require("mongoose");

const Schema =new mongoose.Schema({
   bookname:String,
   bookPrice :Number ,
    author_id:{type:mongoose.Types.ObjectId,ref:"author"}
})

module.exports=mongoose.model("book",Schema);