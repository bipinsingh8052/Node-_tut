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


module.exports={
    authorPage,
    display
}