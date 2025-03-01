import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
export default function Login() {
    let[email,setemail]=useState("");
    let [password,setPassword]=useState("");
    let nav=useNavigate();
    
    const Login=()=>{
        console.log(email,password)
       
    }
    const submit=async(e)=>{
        e.preventDefault();
        let api="http://localhost:8010/student/login";
        try {
            let response= await axios.post(api,{email:email,password:password});
            console.log(response);
            const token=response.data.tokens;
            console.log(token);
            localStorage.setItem("token",token);
            // alert(response.data.msg)

            nav('/home')
        } catch (error) {
           alert(error.response.data.msg);
            
        }
    }

    // const loading=()=>{

    // }
    // useEffect(()=>{
    //     loading();
    // },[])
  return (
<center>
    <div>
        <h1>Login Page</h1>

      <form onSubmit={submit} >
      <input type="email" placeholder='Enter the Email' name='email' value={email} onChange={(e)=>{setemail(e.target.value)}} />
      <br />
      <input type="password" placeholder='Enter the password' name='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
      <br />
      <button onClick={Login}>Login</button>
      </form>
    </div>
    </center>
  )
}
