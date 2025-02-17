const mongoose =require("mongoose")
const schema= new mongoose.Schema({
    name:String,
    no:Number,
    email:String,
    password:String,
    add:String
})

module.exports = mongoose.model("signUp",schema)