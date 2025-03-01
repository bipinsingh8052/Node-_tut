import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function Home() {
    let nav=useNavigate();


    const loading=async()=>{

      let token=localStorage.getItem("token")
      console.log(token);
      let api ="http://localhost:8010/student/authoration";
      try {
        let response =await axios.post(api,null,{headers: { "tokensid": token }})
        console.log(response);
        localStorage.setItem("name",response.data.name)
        nav("/dashboard")
      } catch (error) {
        console.log(error);    
      }

    }

    const Logout=()=>{

    }


    
    useEffect(()=>{
        loading();
    },[])
  return (
    <div>
      <h1>This is Home page</h1>
      <br /><br /><br />

      <button onClick={Logout}>logout</button>
    </div>
  )
}
