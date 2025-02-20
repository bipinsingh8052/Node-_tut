const user =require("../Model/user");
const sign =require("../Model/sign")
const inserPage=async(req,res)=>{
    console.log(req.body);
    const {
        username,
        email }=req.body;


      const signup=await sign.create({
        username:username,
        email:email
      });
    
    const { firstname,
    lastname }=req.body;

const userid=await user.create({
    firstname:firstname,
    lastname:lastname,
    Userid:signup._id
})
res.send("okk")

}



const displaypage =async(req,res)=>{
    const data =await user.find().populate("Userid")
    res.send(data);
}

module.exports={
    inserPage,
    displaypage
}