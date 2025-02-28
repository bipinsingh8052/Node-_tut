import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
    let [input,setinput]=useState({});
    const handleinput=(e)=>{
        let{name,value}=e.target;
        setinput(valuse=>({...valuse,[name]:value}))
    }
    let nav=useNavigate();
    const SignUp=async()=>{
        console.log(input);
        let api="http://localhost:8010/student/signUp"
        try {
            let response=await axios.post(api,input);
            console.log(response);
            alert(response.data.msg)
            nav("/login");
        } catch (error) {
            alert(error.response.data.msg)
            console.log("error")
            
        }

    }

   
  return (
    <div>
      <center>
        <h1>This  is signup Page</h1>
        <input type="text" placeholder='Enter the name:' name='name' onChange={handleinput} /><br />
        <input type="email" placeholder='Enter the email' name='email' onChange={handleinput} />
        <br />

        <input type="text" placeholder='Enter the city' name='city' onChange={handleinput} />
        <br />
        <input type="password" placeholder='Enter the password' name='password' onChange={handleinput} />
        <br /><br />
        <button onClick={SignUp}>SignUp</button>
      </center>
    </div>
  )
}
