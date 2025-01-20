const fs= require ("fs");
// in this have three type 


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



// open file 
// in this three parameter
// when you  create a file in empty
// if your allready have file then he put that file empty

// const fs =require ("fs");

fs.open("Open.docx","w",(err,file)=>{
    if(err) throw err;
    console.log("this is open file");
})



// 
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

