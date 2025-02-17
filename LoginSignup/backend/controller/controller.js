const model =require("../model/model")
const loginPage=async(req,res)=>{
   const{
    email,
    name,
    no,
    address,
    password
  }=req.body;

  let Data =await model.create({
    name:name,
    no:no,
    email:email,
    password:password,
    add:address
  })

    res.send({msg:"Successfully Signup it"});
}


module.exports={
    loginPage
}