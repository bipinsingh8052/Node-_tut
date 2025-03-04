const multer =require("multer");
const storage =multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, 'uploadPhoto/'); // Save files to uploads directory
       },   
       
       
    //    this is only give the name of images
       filename:(req, file, cb)=>{
        cb(null, Date.now()+"-"+file.originalname); // Keep original file name
       } 


})

const upload = multer({ storage: storage });


module.exports=upload;