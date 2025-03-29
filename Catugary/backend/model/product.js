const mongoose =require("mongoose");
const schema = new mongoose.Schema({

    name: {
        type: String,
        require: true
    },
    catgury:{
        type:String,
        require:true
    },
    subcatgury:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    details:{
        type:String,
        require:true
    }
})



module.exports=mongoose.model("product",schema)