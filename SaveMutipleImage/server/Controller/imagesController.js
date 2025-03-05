const Model =require("../model/imagesModel");
const SaveImage=async(req,res)=>{
    // console.log(req.body);
    const  {
        name,
        brandname,
        price,
        detail
      }=req.body;


    console.log(req.files)

    const defaultimg=req.files[0].path;
    console.log(defaultimg);
    const pathImages = req.files.map((e)=>{return e.path});
    console.log(pathImages)
    try {
        const data =await Model.create({
            name:name,
            brandname:brandname,
            price:price,
            details:detail,
            defaultimg:defaultimg,
            all_images:pathImages
        })

        res.send("okk")
    } catch (error) {
        res.send(500).send("Server Error");
    }
    
}


const SearchPage =async(req,res)=>{
    console.log(req.body);
const {id}=req.body
    try {
        let data =await Model.findById(id);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send("server error");
    }
}



const DisplayPages=async(req,res)=>{
    try {
        const data =await Model.find();
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send("server Error");
    }
}


module.exports={

    SaveImage,
    DisplayPages,SearchPage
}