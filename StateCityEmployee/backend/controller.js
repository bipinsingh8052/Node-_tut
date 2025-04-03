
const statemodel =require("./model/state")
const CityModel =require("./model/city")
const namemodel=require("./model/employee");
const stateInsert=async(req,res)=>{
    // console.log(req.body)
    const{state}=req.body;

    const data =await statemodel.create({
        state:state
    })
    res.status(201).send("okk")
}


const ShowState=async(req,res)=>{
    const data=await statemodel.find();
    res.status(200).send(data);
}

const InsertCity=async(req,res)=>{
    // console.log(req.body);
    const { city, state}=req.body;

    const data =await CityModel.create({
        city:city
    }) 
    await CityModel.findByIdAndUpdate(data._id,{ $push: { stateId:state} })
    res.send("okk")
}


const ShowCityname=async(req,res)=>{
    // console.log(req.body)
    const { state }=req.body;
    const findData =await CityModel.find({stateId:state});
    console.log(findData);
    res.send(findData)

}


const EnterName =async(req,res)=>{
// console.log(req.body);
const{
    statedata,
    cityData,
    name
  }=req.body;
const data =await namemodel.create({
    name:name,
    stateinfo:statedata,
    cityInfo:cityData

})
res.send("okk")

}


const ShowAllData=async(req,res)=>{
    const data =await namemodel.find().populate("stateinfo").populate("cityInfo");

    // console.log(data);
    res.send(data)
}



const DeletePage =async(req,res)=>{
    // console.log(req.body)
    const{id}=req.body;
    await namemodel.findByIdAndDelete(id);
    res.send("okk")
}

const SearchEditPage=async(req,res)=>{
    // console.log(req.body);
    const{id}=req.body;
    const finddata =await namemodel.findById(id).populate("stateinfo").populate("cityInfo");
    res.send(finddata)
}

module.exports={
    stateInsert,
    ShowState,
    InsertCity,
    ShowCityname,
    EnterName,
    ShowAllData,
    DeletePage,
    SearchEditPage
}