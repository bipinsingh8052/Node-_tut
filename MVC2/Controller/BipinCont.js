const homepage=(req,res)=>{
    res.render("Bipin");
}
const aboutpage=(req,res)=>{
    res.render("BipinAbout");
}
module.exports={
    homepage,
    aboutpage
}