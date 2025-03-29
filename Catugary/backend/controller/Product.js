const model =require("../model/product")

const insertPage =async(req,res)=>{
    // console.log(req.body);
    const {
        name,
        productCatgury,
        SubCatug,
        price,
        detail
      }=req.body;


      const data =await model.create({
        name:name,
        catgury:productCatgury,
        subcatgury:SubCatug,
        price:price,
        details:detail
      })


    res.send("okk");
}




const catguryPage=async(req,res)=>{
    let data=await model.aggregate([
        { $group: { _id: "$catgury" } },
        { $project: { _id: 0, city: "$_id" } }
    ]);
    res.send(data)
}


const SubcatguPage=async(req,res)=>{
    // console.log(req.body);
    const {option}=req.body;
    let data =await model.find({catgury:option});
    // this is remove it duplicate element  never forget this 
    const uniqueData = Array.from(new Map(data.map(item => [item.subcatgury, item])).values());
    // console.log(uniqueData)
    res.send(uniqueData)
}

module.exports={
    insertPage,
    catguryPage,
    SubcatguPage
}