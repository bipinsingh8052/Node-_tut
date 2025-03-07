const mongoose =require("mongoose");
const SChema=new mongoose.Schema({
    name:String,
    city:String,
    Book_Id:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"book"
    }]

})

module.exports=mongoose.model("author",SChema);



