
const AuthorModel=require("../model/Author");
const BookModel =require("../model/Book");





const HomePage=async(req,res)=>{
    console.log(req.body);
    const {
        authorname,
        City,
        bookname,
        bookprice
      }=req.body;
      console.log(req.file.filename)
      const img=req.file.filename
      try {
        
        let book=await BookModel.create({
            bookname:bookname,
            BookPrice:bookprice,
            bookimage:img
        });
        let author= await AuthorModel.create({
            name:authorname,
            city:City
        })
        await BookModel.findByIdAndUpdate(book._id,{ $push: { author_Id: author._id} })
     
        await  AuthorModel.findByIdAndUpdate(author._id,{$push:{Book_Id:book._id}})
        res.status(201);
      } catch (error) {
        res.status(500).send("Server Error")
      }  
}



const DisplayAuthor=async(req,res)=>{
    try {
        

        const data= await AuthorModel.find().populate("Book_Id")
        console.log(data);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send("server Error");
    }
   
}

const DisplayBook=async(req,res)=>{
    try {
        const data =await BookModel.find().populate("author_Id");
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send("server Error");
    }

}

const InsertMoreBook=async(req,res)=>{
    // console.log(req.body)
    const{  bookname,
        bookprice,
        idauthor
      }=req.body;

    //   console.log(req.file.filename)
      const img =req.file.filename;
      try {
        let data =await BookModel.create({
            bookname:bookname,
            BookPrice:bookprice,
            bookimage:img
        })
        await BookModel.findByIdAndUpdate(data._id,{ $push: { author_Id:idauthor} })
        
      } catch (error) {
        res.status(500).send("Server Error");
      }
}



module.exports={

    HomePage,
    DisplayAuthor,
    DisplayBook,
    InsertMoreBook
}