const studentModel = require("../models/studentModel");
const StuModel =require("../models/studentModel");


const homePage=(req,res)=>{
    res.send("this is my home page")
}

const contactPage =(req,res)=>{
    res.send("this is my contant");
}
const insertPage =async(req,res)=>{

    console.log(req.body);
    const {name,address,number,fees,email}=req.body;
    console.log(name,address,number,fees,email)
    const data = await studentModel.create({
        name:name,
        fees:fees,
        address:address,
        email:email,
        number:number
    })

    res.send(data);
}

const displayPage=async(req,res)=>{

    let data =await studentModel.find();

    res.send(data)
    
}
const searchpage=async(req,res)=>{
    console.log(req.body)
    res.send("data")
}

module.exports={
    homePage,
    contactPage,
    insertPage,
    displayPage,
    searchpage
}