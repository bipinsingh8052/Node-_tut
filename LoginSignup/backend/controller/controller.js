const model =require("../model/model")
const loginPage=async(req,res)=>{
   const{
    email,
    name,
    no,
    address,
    password
  }=req.body;

  try {
    let Data =await model.create({
      name:name,
      no:no,
      email:email,
      password:password,
      add:address
    })
  
      res.send({msg:"Successfully Signup it"});
  } catch (error) {
    console.log(error)
    // res.send(error).json({msg:"this is not signUp"})
  }
}

const loginPageinSingup=async(req,res)=>{
  let { email, password}=req.body;
  console.log(req.body);
  try {
    // let data =await model.find({email:email});
    // console.log(data)   //return a array
    let data =await model.findOne({email:email});
    console.log(data)
    if(!data){
      res.status(400).send({msg:"Invalid email"})
    }

    if(data.password != password){
      res.status(400).send({msg:"Invalid password"})
    }
    // console.log(data.password,password)
   
    res.status(200).send({msg:"successful login"})

  } catch (error) {
    console.log(error)
    // res.status(400).send({msg:"Invaild "})
    
  }
}


module.exports={
    loginPage,loginPageinSingup
}