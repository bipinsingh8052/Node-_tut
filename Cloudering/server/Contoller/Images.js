const model =require("../model/Student");
const InserPage=async(req,res)=>{
    console.log(req.body);
    const {
        image,
        name,
        number,
        Class
      }=req.body
    try {
        let data =await model.create({
            name:name,
            imageurl:image,
            rollno:number,
            class:Class
        })
        res.status(201);
    } catch (error) {
        res.status(500).send("server Error")
    }
}

const Displaydata =async(req,res)=>{
    try {
        let data=await model.find();
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send("server Error")
    }
}
module.exports={
    InserPage,
    Displaydata
}