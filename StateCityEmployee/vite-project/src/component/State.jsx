import React, { useState } from 'react'
import axios from "axios"
export default function State() {
    let [state,setState]=useState("");
    const SubmitState=async()=>{
        let api="http://localhost:9000/user/state";
        let response =await axios.post(api,{state:state});
        console.log(response.data);
        alert("Your state is INserted ")

    }
  return (
    <div>
    <h1>Enter the State in the Box: <input type='text' placeholder='Enter the state name only' required onChange={(e)=>{setState(e.target.value)}} / ></h1>
    <button onClick={SubmitState}>Submit it </button>
      
    </div>
  )
}
