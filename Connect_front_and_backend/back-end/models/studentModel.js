const mongoose =require("mongoose");
const Schema = new mongoose.Schema({
    rollno :Number,
    name:String,

    fees:Number,
    number: Number
})



module.exports = mongoose.model("Shivansh",Schema);