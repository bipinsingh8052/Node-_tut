const filesave=(req,res,next)=>{
    console.log("my photo is save");
    req.filename="bipinsingh.jpg";
    next();
}

module.exports={filesave}