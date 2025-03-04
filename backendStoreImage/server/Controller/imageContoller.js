
const imageModel = require("../model/imageModel");
const imagesModel =require("../model/imageModel")
const InsertPage =async(req,res)=>{
    console.log(req.body);
    // deStructure the file name;
    console.log(req.file.filename)

    const{
        name,
        emplooynumber,
        employeeaddress,
        employeework
      }=req.body;
      const filename=req.file.filename;


      try {
        const data =await imageModel.create({
            name:name,
            work:employeework,
            address:employeeaddress,
            number:emplooynumber,
            images:filename
        })


        res.status(200).send("okk");
      } catch (error) {
        res.status(500).send("server Error");
      }


}





const displayPage=async(req,res)=>{
    console.log("okk");
    try {
        let data =await imageModel.find();
        res.status(200).send(data);
        
    } catch (error) {
        res.status(500).send("serverError")
    }
}


module.exports={
    InsertPage,
    displayPage
}