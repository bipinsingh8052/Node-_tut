const homePage=(req,res)=>{
    res.render("homePage");
}
const aboutPage=(req,res)=>{
    res.render("aboutPage");
}
const coursePage=(req,res)=>{
    res.render("courseAll");
}
const feesPage=(req,res)=>{
    res.render("feesPage");
}
module.exports={
    homePage,
    aboutPage,
    coursePage,
    feesPage
}