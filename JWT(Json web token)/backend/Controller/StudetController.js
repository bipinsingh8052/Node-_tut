const modelSignUp =require("../model/StudentModel")
const bcrypt =require("bcrypt")
const jwt=require("jsonwebtoken");
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



const check=null


const LoginPage=async(req,res)=>{
    // console.log(req.body);
    const { email, password }=req.body;
    try {
        let data =await modelSignUp.findOne({email:email});
        console.log(data)
        if(!data){
           return  res.status(404).send({msg:"Email Invalid"})
        }


        // // encode the password

        let hasPassword = await bcrypt.compare(password,data.password);
        console.log(hasPassword);
        if(!hasPassword){
            return res.status(500).send({msg:"invalid password"})
        }
        // endcode the password
        

        const token =await jwt.sign({id:data._id},process.env.JWT,{ expiresIn: '1day' } )
    console.log(token)

        res.status(200).send({tokens:token});
    }
     catch (error) {
        res.status(400).send({msg:"Api Not Found"});

    }
   
}









const Authoreation=async(req,res)=>{
    // console.log(req.header("tokensid"));

    const token=req.header("tokensid");
    try {
        
        

        let searchData=null
       
        const vers=await jwt.verify(token,process.env.JWT,(error,auth)=>{
            
            if(auth){
                console.log("match the token",auth)
                searchData =auth.id;
                
                // res.status(200).send(auth)
            }
           
        });
        // console.log(searchData)
            let data= await modelSignUp.findById(searchData).select("-password")
            // console.log(data);
    

            res.status(200).send(data);
       


    } catch (error) {
        res.status(500).send("not Found");
        
    }
   

}

module.exports={
    SignUpPage,
    LoginPage,
    Authoreation
}