import React, { useState } from 'react'
import axios from "axios"
export default function AddCountry() {
    let [country,setCountry]=useState("");
    const HandleSubmit=async()=>{
        let api="http://localhost:9000/user/coutry";
        let response = await axios.post(api,{country:country});
        console.log(response.data);
        alert("Your country is Insert ")
    }
  return (
    <div>
        <h1>Add your country</h1>

        <br /><br /><br /><br /><br /><br /><br /><br />
        <p>Enter your Country: <input type="text" name='country' onChange={(e)=>{setCountry(e.target.value)}}/>
        </p>
        <button onClick={HandleSubmit}>Submit</button>
      
    </div>
  )
}
