const stuModel=require("../models/studentModel")
const homePage=(req,res)=>{
    res.send("home page");
}
const InsePage=async(req,res)=>{
   
    console.log(req.body)
    res.send("this is insert page");

    
    // const {name,number,rollno,fees}=req.body;
    // const data =await stuModel.create({
    //     rollno:rollno,
    //     name:name,
    //     fees:fees,
    //     number:number
    // })
}
module.exports={
    homePage,
    InsePage
}