const collegeModel=require('../model/CollegeModel');
const homePage=(req,res)=>{
    res.render('home');
}
const aboutPage=(req,res)=>{
    res.render('about');
}
const contactPage=(req,res)=>{
    res.render('contact');
}
const coursesPage=(req,res)=>{
    res.render('course');
}
const facultyPage=(req,res)=>{
    res.render('faculty');
}
const sendPage=async(req,res)=>{
    console.log("data")
}
module.exports={
    homePage,
    aboutPage,
    contactPage,            
    coursesPage,
    facultyPage,
    sendPage
}