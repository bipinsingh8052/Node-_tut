const mongoose =require("mongoose");
const Schema=new mongoose.Schema({
    bookname:String,
    BookPrice:Number,
    bookimage:String,
    author_Id:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"author"
    }]
})


module.exports=mongoose.model("book" ,Schema);