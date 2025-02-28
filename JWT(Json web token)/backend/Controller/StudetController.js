const modelSignUp =require("../model/StudentModel")
const bcrypt =require("bcrypt")
const JWT=require("jsonwebtoken");
const SignUpPage=async(req,res)=>{
    console.log(req.body);
    // 
    const {
        name,
        email,
        city,
        password
      }=req.body;

      try {
        // decode the password 
        let salt =await bcrypt.genSalt(10)
        let hasPassword =await bcrypt.hash(password, salt)
        // decode the password
        console.log("noral",hasPassword);
       let data =modelSignUp.create({
        name:name,
        city:city,
        email:email,
        password:hasPassword
    
       })
       res.status(200).send({msg:"Succfully Sigup"});
      } catch (error) {
        res.status(400).send({msg:"not found api"});
        
      }
    
}






const LoginPage=async(req,res)=>{
    console.log(req.body);
    const { email, password }=req.body;
    try {
        let data =await modelSignUp.findOne({email:email});
        console.log(data)
        if(!data){
           return  res.status(404).send({msg:"Email Invalid"})
        }


        // // encode the password

        let hasPassword = await bcrypt.compare(password,data.password);
        // console.log(hasPassword);
        if(!hasPassword){
            return res.status(404).send({msg:"invalid password"})
        }
        // endcode the password
        
        

        const token =await JWT.sign(
            {id:data._id},process.env.JWT,{ expiresIn: '1h' } )
    // console.log(token)
        res.status(200).send({msg:"login succfully","token":`${token}`});
    } catch (error) {
        res.status(400).send({msg:"Api Not Found"});

    }
   
}



module.exports={
    SignUpPage,
    LoginPage
}