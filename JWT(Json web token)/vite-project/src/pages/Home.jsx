import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    let nav=useNavigate();


    const loading=()=>{

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
