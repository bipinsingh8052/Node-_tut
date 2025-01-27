const stuModel=require("../models/studentModel")
// const homePage=(req,res)=>{
//     res.send("home page");
// }
const InsePage=async(req,res)=>{
   
    console.log(req.body)
    // res.send("this is insert pags

    
    const {rollno,name,fees,number}=req.body;
    const data =await stuModel.create({
        rollno:rollno,
        name:name,
        fees:fees,
        number:number
    })

    res.send(data)
}

const display=async(req,res)=>{
    const data =await stuModel.find();
    res.send(data);
}
const search =async(req,res)=>{

    // console.log(req.body)
    const {rollno}=req.body;
    
    const data=await stuModel.find({rollno:rollno})
    res.send(data)

}
module.exports={
    // homePage,
    InsePage,

    display,
    search
}