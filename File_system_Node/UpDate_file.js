// two type of 
// append file
// in this pass three parameter
// when your file is allready in that he append the all data in that file 
// if file is not excess then he create it file


// const fs =require ("fs");
// fs.appendFile("Newfile.txt","hello brother i want know it ",(error)=>{
//     if(error) throw error;
//     console.log("Created the file");
// })

// const fs =require ("fs");
// fs.appendFile("Newfile.txt","new file ertyuio ",(error)=>{
//     if(error) throw error;
//     console.log("Created the file");
// })



// Write file 
// it is replace it old data is replace it 
// When you use it that it is create it file when you file we not excess it then
// if your file we allready excess then he update it data


// fs.writeFile("Write.docx","My all data in write the data",(err)=>{
//     if(err) throw err;
//     console.log("write the file ")
// })
fs.writeFile("Write.docx","new data in the data",(err)=>{
    if(err) throw err;
    console.log("write again the file ")
})