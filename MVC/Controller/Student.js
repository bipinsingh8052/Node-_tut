const home =(req,res)=>{
    res.send("this is Home  page");
}
const About=(req,res)=>{
    res.send("this is my About page");
}
const course=(req,res)=>{
    res.send("this is courese page");
}
const ourfees =(req,res)=>{
    res.send("this this fess pages");
}
module.exports={
    home,

    About,course,
    ourfees
}