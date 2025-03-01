import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
    let nav =useNavigate();
    const killer =localStorage.getItem("name");
    const Logout=()=>{
        localStorage.clear();
        nav("/home")
       
    }
    const loading=()=>{
        let name=localStorage.getItem("name");
        let token=localStorage.getItem("token");
        if(!(token && name)){
            nav("/home");
        }
    }
    useEffect(()=>{
loading();
    })
  return (
    <div>
    <h1> This is dasboard</h1>
    <h1>name:{killer}</h1>
     <br /><br /><br /><br /><br /><br /><br /><br /><br />
     <button onClick={Logout}>logout</button>
      
    </div>
  )
}
