const authorModel =require("../models/Author");
const bookModel =require("../models/Book")


const authorPage =async(req,res)=>{
    // console.log(req.body)
    const {
        Authorname,
        Authorcity,
        Authorcountry,
        Authoremail
      }=req.body;

      try {
        let data =await authorModel.create({
            Writername:Authorname,
            City:Authorcity,
            Country:Authorcountry,
            email:Authoremail
        })
        res.status(200).send({msg:"Insert Successfully"})
        
      } catch (error) {
        res.status("401").send({msg:"Api fetch error"})
      }
 
}



const display=async(req,res)=>{

    try {
        let data =await authorModel.find();
        res.status(201).send(data);
        
    } catch (error) {
        res.status(401).send("not connect to error")
        
    }
   
}

const bookinsert=async(req,res)=>{
    // console.log(req.body)
    const{ name, price, id }=req.body;
    try {
        let book =await bookModel.create({
            bookname:name,
            bookPrice:price,
            author_id:id
        })

        let authorData=await authorModel.findByIdAndUpdate(id ,{ $push:{Book_id:book._id}})
        res.send({msg:"Insert the books"})
    } catch (error) {
        res.send({msg:"book is not submited"})
        
    }
   
}


const alldataDispaly=async(req,res)=>{
    console.log("okk");
    try {
        let data=await authorModel.find().populate("Book_id");
        res.send(data);
        
    } catch (error) {
        res.send("not a data")
        
    }
   
}


module.exports={
    authorPage,
    display,
    bookinsert,
    alldataDispaly
}