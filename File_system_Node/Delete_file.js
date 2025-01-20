// in delete file have only one type 
// 1.unlink 

// in this passs in two parameter
// deleted your file
const fs =require ("fs");
fs.unlink("Newfile.txt",(error)=>{
    if(error) throw error;
    console.log("delted the file ")
})