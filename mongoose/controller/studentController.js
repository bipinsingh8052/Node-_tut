const studentModel =require("../models/StudentModel")
const homePage=(req,res)=>{
    res.render("home")
}
const insertPage=(req,res)=>{
    res.render("insert");
}
const displayPage=(req,res)=>{
    res.render("display");

}
const savepage= async(req,res)=>{
    // res.send("this is number")
    //  name: 'Bipin singh', age: '67', rollno: '3456789', course: '8909'
    // console.log(req.body);
    const {name,age,rollno,course}=req.body;
    const data =await studentModel.create({
        name:name,
        age:age,
        rollno:rollno,
        course:course
    })
    console.log(data);
    res.render("home")
}


module.exports={
    homePage,
    insertPage,
    displayPage,
    savepage
}