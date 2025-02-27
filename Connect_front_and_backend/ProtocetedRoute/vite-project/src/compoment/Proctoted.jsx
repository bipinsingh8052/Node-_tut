import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Proctoted(props) {
    let {Component}=props;
    let nav=useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem("login")){
         nav("/home");   
        }
    })
  return (
    <div>
        <Component/>
      
    </div>
  )
}
