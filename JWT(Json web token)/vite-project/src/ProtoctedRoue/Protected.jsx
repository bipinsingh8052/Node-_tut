import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Protected(Props) {
    let nav=useNavigate();
    let {component}=Props;
    const loading=()=>{
        const name =localStorage.getItem("name");
        if(name){
            nav("/home")
        }
    }
    useEffect(()=>{
        loading()
    },[])
  return (
    <div>

        <component/>
      
    </div>
  )
}
