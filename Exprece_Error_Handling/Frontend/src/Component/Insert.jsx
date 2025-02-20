import React, { useState } from 'react'
import axios from 'axios'


export default function Insert() {

let[input,setinput]=useState({})
  const handleinput=(e)=>{
    let{name,value}=e.target;
    setinput(values=>({...values,[name]:value}))

  }
  const Submitfrom=async()=>{

    let api="http://localhost:9090/user/sign";
    try {
      let response=await axios.post(api,input);
      console.log(response)
    } catch (error) {
      console.log(error)
      
    }

  }
  return (
    <div>
        enter the Username : <input type='text' name='username' value={input.username} onChange={handleinput}/> <br />
        enter the email : <input type='email' name='email' value={input.email} onChange={handleinput}/>  <br />
        enter the first name : <input type='text' name='firstname' value={input.firstname} onChange={handleinput}/> <br />
        enter thelast name : <input type='text' name='lastname' value={input.lastname} onChange={handleinput}/> <br />
        <button onClick={Submitfrom}>Submit</button>
    </div>
  )
}
