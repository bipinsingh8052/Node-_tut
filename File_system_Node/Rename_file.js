// remane file
// it is rename it your file name what you write the name
const fs=require ("fs");
fs.rename("Open.docx","open.txt",(error)=>{
    if(error) throw error;
    console.log("this is rename it ")
})