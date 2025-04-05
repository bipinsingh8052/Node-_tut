const Country=require("../model/coutry")
const stateModel =require("../model/state")
const cityModel=require("../model/city")




const insertCountry=async(req,res)=>{
    // console.log(req.body);
    const{country}=req.body;
    let data =await Country.create({
        coutry:country
    })
    res.send("okk");
}

const InsertState =async(req,res)=>{
    const { state, countryid }=req.body;
    const data =await stateModel.create({
        state:state
    })
    let updat =await stateModel.findByIdAndUpdate(data._id,{ $push: { countryId:countryid} })
    res.send("okk")
}
const GEtCOuntry=async(req,res)=>{
    let data =await Country.find();
    res.send(data);
}




const SearchState=async(req,res)=>{
    console.log(req.body);
    const { stateid }=req.body;
    const data =await stateModel.find({countryId:stateid})
    res.send(data)

}
const insertCity=async(req,res)=>{
    console.log(req.body);
    const {
        stateid,
        Countryid,
        city
      }=req.body;

      const data =await cityModel.create({
        city:city
      })

      await cityModel.findByIdAndUpdate(data._id,{ $push: { countryId:Countryid} })
      await cityModel.findByIdAndUpdate(data._id,{ $push: { stateId:stateid} })
    res.send("okk")
}


const Display=async(req,res)=>{
    let data =await cityModel.find().populate("countryId").populate("stateId");
    res.send(data);

}

module.exports={
    insertCountry,
    InsertState,
    GEtCOuntry,
    SearchState,
    insertCity,
    Display
}