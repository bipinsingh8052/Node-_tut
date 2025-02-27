import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../LoginSlice';
import { useNavigate } from 'react-router-dom';
export default function Login() {
    let value=useSelector(state=>state.login.login)
    console.log(value)
    let nav=useNavigate();
    let dispatch =useDispatch();
    const loginknow=()=>{
        localStorage.setItem("login",true)
    }
    useEffect(()=>{
        if(localStorage.getItem("login")){
            nav("/home")
            console.log(localStorage.getItem("login"))
        }
    },[])
  return (
    <div>
      <h1>Login page</h1>

      <button onClick={()=>{loginknow()}}>Login </button>
    </div>
  )
}
