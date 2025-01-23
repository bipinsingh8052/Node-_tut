const mongoose = require('mongoose');
const ContactSchem = new  mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    message:String

})
module.exports=mongoose.model('contact',ContactSchem);